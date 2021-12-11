import React, {Component} from 'react';
import produce from "immer"
import classes from './NewsForm.module.scss';
import Card from "../ui/Card/Card";
import InputText from "../ui/InputText/InputText";
import Button from "../ui/Button/Button";
import type {InputText as InputTextType, Hashtag, InputGroup} from "../../types/inputTypes";
import type {DataType} from "../../types/dataType";
import InputTextArea from "../ui/InputTextArea/InputTextArea";
import InputPhoto from "../ui/InputPhoto/InputPhoto";
import HashtagsList from "./HashtagsList/HashtagsList";
import faker from "faker";
import InputRadio from "../ui/InputRadio/InputRadio";

type Props = {
    onAddNewArticle: (article: DataType) => void
    onClose: () => void
};

type State = {
    inputGroup: InputGroup,
    formValid: boolean
};

const INITIAL_STATE = {
    title: {
        value: '',
        touched: false,
        valid: false,
        label: 'Enter article title',
        errorMessage: 'You entered wrong title'
    },
    description: {
        value: '',
        touched: false,
        valid: false,
        label: 'Enter article description',
        errorMessage: 'You entered wrong description'
    },
    text: {
        value: '',
        touched: false,
        valid: false,
        label: 'Enter article text',
        errorMessage: 'You entered wrong text'
    },
    photo: {
        value: '',
        touched: false,
        valid: false,
        label: 'Enter article photo',
        errorMessage: 'You entered to heavy photo (no more 200kb)'
    },
    hashtags: {
        checkboxList: [
            {label: '#hot', checked: false, id: `#hot-1`},
            {label: '#cats', checked: false, id: `#cats-2`},
            {label: '#other', checked: false, id: `#other-3`},
        ],
        touched: false,
        valid: false,
        errorMessage: 'You need choose more then 1 hashtag'
    },
    author: {
        value: '',
        touched: false,
        valid: false,
        label: 'Choose author',
        errorMessage: 'You need choose author',
        authors: [`${faker.name.firstName()} ${faker.name.firstName()}`, `${faker.name.firstName()} ${faker.name.firstName()}`, `${faker.name.firstName()} ${faker.name.firstName()}`]
    },
}

class NewsForm extends Component<Props, State> {
    state = {
        inputGroup: INITIAL_STATE,
        formValid: false
    }

    inputTextHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const input = event.currentTarget;
        const {value, name} = input;
        const valid = /\w{2,}/gi.test(value)

        this.setState(prev => {
            const newState = produce(prev, nextState => {
                // @ts-ignore
                nextState.inputGroup[name] = {
                    // @ts-ignore
                    ...prev.inputGroup[name],
                    touched: true,
                    value: value,
                    valid: valid,
                }
            })
            return newState
        })
    }

    inputPhotoHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const input = event.currentTarget;
        const {files} = input;

        if (files) {
            const  reader = new FileReader()
            reader.readAsDataURL(files[0]);
            reader.onload =  () => {
                this.setState(prev => {
                    const newState = produce(prev, nextState => {
                        nextState.inputGroup.photo = {
                            ...prev.inputGroup.photo,
                            touched: true,
                            value: reader.result,
                            valid: files[0].size < 200000,
                        }
                    })
                    return newState
                })
            };
        }
    }

    inputHashtagsHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const input = event.currentTarget;
        const {checked, name} = input;

        this.setState(prev => {
            const newState = produce(prev, nextState => {

                const checkboxIndex = prev.inputGroup.hashtags.checkboxList.findIndex( el => el.label === name)
                const newHashtagsArray = [...prev.inputGroup.hashtags.checkboxList]

                newHashtagsArray[checkboxIndex] = {
                    ...newHashtagsArray[checkboxIndex],
                    checked,
                }

                nextState.inputGroup.hashtags = {
                    ...prev.inputGroup.hashtags,
                    touched: true,
                    valid: newHashtagsArray.some( el => el.checked),
                    checkboxList: newHashtagsArray
                }
            })
            return newState
        })
    }

    inputAuthorHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const input = event.currentTarget;
        const {value, name} = input;

        this.setState(prev => {
            const newState = produce(prev, nextState => {
                // @ts-ignore
                nextState.inputGroup[name] = {
                    // @ts-ignore
                    ...prev.inputGroup[name],
                    touched: true,
                    value: value,
                    valid: true
                }
            })
            return newState
        })
    }

    resetForm = (): void => {
        this.setState(prev => {
            const newState = produce(prev, nextState => {
                nextState.inputGroup = INITIAL_STATE
            })
            return newState
        })
    }

    checkFormValid = () => {
        const {title, description, text, photo, hashtags, author} = this.state.inputGroup

        if(title.valid && description.valid && text.valid && photo.valid && hashtags.valid && author.valid) {
            this.setState({formValid: true})
        };
    }

    submitFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault()

        const hashtagArray: string[] = []

        this.state.inputGroup.hashtags.checkboxList.forEach( hashtag => {
            if (hashtag.checked) {
                hashtagArray.push(hashtag.label)
            }
        })

        this.props.onAddNewArticle({
            id: faker.datatype.uuid(),
            title: this.state.inputGroup.title.value,
            text: this.state.inputGroup.text.value,
            description: this.state.inputGroup.description.value,
            photo: this.state.inputGroup.photo.value,
            hashtags: hashtagArray,
            author: this.state.inputGroup.author.value,
        })

        this.props.onClose()
        this.resetForm()
    }

    render() {
        const {value: titleValue, valid: titleValid, errorMessage: titleErrorMessage, label: titleLabel,touched: titleTouched} = this.state.inputGroup.title
        const {value: descriptionValue, valid: descriptionValid, errorMessage: descriptionErrorMessage, label: descriptionLabel,touched: descriptionTouched} = this.state.inputGroup.description
        const {value: textValue, valid: textValid, errorMessage: textErrorMessage, label: textLabel,touched: textTouched} = this.state.inputGroup.text
        const {value: photoValue, valid: photoValid, errorMessage: photoErrorMessage, label: photoLabel,touched: photoTouched} = this.state.inputGroup.photo
        const {valid: hashtagsValid, errorMessage: hashtagsErrorMessage ,touched: hashtagsTouched, checkboxList} = this.state.inputGroup.hashtags
        const {valid: authorValid, errorMessage: authorErrorMessage ,touched: authorTouched, label: authorLabel, authors} = this.state.inputGroup.author

        return (
            <Card className={classes['form-wrapper']}>
                <form onSubmit={this.submitFormHandler} className={classes.form}>
                    <InputText
                        className={classes['input-wrapper']}
                        name="title"
                        value={titleValue}
                        valid={titleValid}
                        touched={titleTouched}
                        errorMessage={titleErrorMessage}
                        label={titleLabel}
                        onChange={this.inputTextHandler}
                        onBlur={this.checkFormValid}/>
                    <InputText
                        className={classes['input-wrapper']}
                        name="description"
                        value={descriptionValue}
                        valid={descriptionValid}
                        touched={descriptionTouched}
                        errorMessage={descriptionErrorMessage}
                        label={descriptionLabel}
                        onChange={this.inputTextHandler}
                        onBlur={this.checkFormValid}/>
                    <InputTextArea
                        className={classes['input-wrapper']}
                        name="text"
                        value={textValue}
                        valid={textValid}
                        touched={textTouched}
                        errorMessage={textErrorMessage}
                        label={textLabel}
                        onChange={this.inputTextHandler}
                        onBlur={this.checkFormValid}/>
                    <InputPhoto
                        className={classes['input-wrapper']}
                        name="photo"
                        prev={photoValue}
                        valid={photoValid}
                        touched={photoTouched}
                        errorMessage={photoErrorMessage}
                        label={photoLabel}
                        onChange={this.inputPhotoHandler}
                        onBlur={this.checkFormValid}/>
                    <HashtagsList
                        hashtagsList={checkboxList}
                        onChange={this.inputHashtagsHandler}
                        valid={hashtagsValid}
                        touched={hashtagsTouched}
                        errorMessage={hashtagsErrorMessage}
                        onBlur={this.checkFormValid}/>
                    <InputRadio
                        className={classes['input-wrapper']}
                        name="author"
                        radioArray={authors}
                        valid={authorValid}
                        touched={authorTouched}
                        errorMessage={authorErrorMessage}
                        label={authorLabel}
                        onChange={this.inputAuthorHandler}
                        onBlur={this.checkFormValid}/>
                    <div className={classes.footer}>
                        <Button disabled={!this.state.formValid} type="submit">Add new article</Button>
                        <Button type="button" className={classes.close} onClick={this.props.onClose}>Close form</Button>
                    </div>
                </form>
            </Card>
        );
    };
};

export default NewsForm