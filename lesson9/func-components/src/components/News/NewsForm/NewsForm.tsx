import React, {useEffect, useRef, useState} from 'react';
import classes from './NewsForm.module.scss'
import Button from "../../ui/Button/Button";
import {NewsFormType, NewsFormValidationType} from "./NewsForm.type";
import {useHistory} from "react-router-dom";
import InputText from "../../ui/InputText/InputText";
import {toBase64} from "./NewsForm.utils";
import InputTextArea from "../../ui/InputTextArea/InputTextArea";
import InputPhoto from "../../ui/InputPhoto/InputPhoto";
import InputCheckbox from "../../ui/InputCheckbox/InputCheckbox";
import InputRadio from "../../ui/InputRadio/InputRadio";

const NewsForm = ({onAddArticle}: NewsFormType) => {
    const history = useHistory();
    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const photoRef = useRef<HTMLInputElement | null>(null);
    const hashtagsRef = useRef<(HTMLInputElement | null)[]>([]);
    const authorRef = useRef<(HTMLInputElement | null)[]>([]);

    const hashtags = [
        {id: Math.random().toString(), label: '#hot'},
        {id: Math.random().toString(), label: '#dog'},
        {id: Math.random().toString(), label: '#cat'},
    ]

    const authors = ["iKot", "Jhon", "Bob"]

    const [validField, setValidField]  = useState<NewsFormValidationType>({
        title: {
            valid: null,
            errorMessage: 'Wrong title'
        },
        text: {
            valid: null,
            errorMessage: 'Wrong text'
        },
        description: {
            valid: null,
            errorMessage: 'Wrong description'
        },
        photo: {
            valid: null,
            errorMessage: 'Enter photo'
        },
        hashtags: {
            valid: null,
            errorMessage: 'Choose some hashtag'
        },
        author: {
            valid: null,
            errorMessage: 'Choose author'
        }
    })

    useEffect(() => {
        console.log('render')
    })

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        let title: string = ''
        let text: string = ''
        let description: string = ''
        let photo: string = ''
        let hashtag: string[] = []
        let author: string = ''

        if (titleRef.current) {
            const {value} = titleRef.current

            if (value === '' && value.length < 50) {
                titleRef.current?.focus()
                setValidField(prev => ({...prev, title: {...prev.title, valid: false}}))
                return
            } else {
                {
                    !validField.title.valid && setValidField(prev => ({...prev, title: {...prev.title, valid: true}}))
                }
                title = value
            }
        }

        if (textRef.current) {
            const {value} = textRef.current

            if (value === '' && value.length < 50) {
                textRef.current?.focus()
                setValidField(prev => ({...prev, text: {...prev.text, valid: false}}))
                return
            } else {
                {
                    !validField.text.valid && setValidField(prev => ({...prev, text: {...prev.text, valid: true}}))
                }
                text = value
            }
        }

        if (descriptionRef.current) {
            const {value} = descriptionRef.current

            if (value === '' && value.length < 300) {
                setValidField(prev => ({...prev, description: {...prev.description, valid: false}}))
                descriptionRef.current?.focus()
                return
            } else {
                {
                    !validField.description.valid && setValidField(prev => ({...prev, description: {...prev.description, valid: true}}))
                }
                description = value
            }
        }

        if (photoRef.current) {
            const {value} = photoRef.current

            if (value !== '' && photoRef.current?.files) {
                {
                    !validField.photo.valid && setValidField(prev => ({...prev, photo: {...prev.photo, valid: true}}))
                }
                photo = await toBase64(photoRef.current.files[0])
            } else {
                setValidField(prev => ({...prev, photo: {...prev.photo, valid: false}}))
                return
            }
        }

        hashtagsRef.current.forEach( el => {
            console.dir(el)
            if (el && el.checked) {
                hashtag.push(el.name)
            }
        })

        if (hashtag.length === 0) {
            if (validField.hashtags.valid !== false) {
                setValidField(prev => ({...prev, hashtags: {...prev.hashtags, valid: false}}))
            }
            return
        }

        authorRef.current.forEach( el => {
            if (el && el.checked) {
                author = el.value
            }
        })

        if (author === '') {
            if (validField.author.valid !== false) {
                setValidField(prev => ({...prev, author: {...prev.author, valid: false}}))
            }
            return
        }


        onAddArticle({
            id: Math.random().toString(),
            title: title,
            text: text,
            author: author,
            description: description,
            photo: photo,
            hashtags: hashtag,
        })

        history.push('/news')
    }



    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <InputText
                ref={titleRef}
                name="title"
                label="Enter title"
                valid={validField.title.valid}
                errorMessage={validField.title.errorMessage}/>
            <InputText
                ref={textRef}
                name="text"
                label="Enter text"
                valid={validField.text.valid}
                errorMessage={validField.text.errorMessage}/>
            <InputTextArea
                ref={descriptionRef}
                name="description" label="Enter description"
                valid={validField.description.valid}
                errorMessage={validField.description.errorMessage}/>
            <InputPhoto
                ref={photoRef}
                name="photo" label="Enter photo"
                valid={validField.photo.valid}
                errorMessage={validField.photo.errorMessage}/>
            <div>
                <h3>Hashtags:
                    {validField.hashtags.valid !== null && (!validField.hashtags.valid
                        ? <span className={classes.error}>Choose hashtag</span>
                        : <span className={classes.success}>Done</span>)
                    }
                </h3>
                <div className={classes.hashtagsWrapper}>
                    {hashtags.map( hashtag => <InputCheckbox
                        key={hashtag.id}
                        ref={ref => {
                                if(hashtagsRef.current.findIndex( el => el?.name === hashtag.label) < 0) {
                                    hashtagsRef.current.push(ref)
                                }
                            }
                        }
                        id={hashtag.id}
                        label={hashtag.label}/>)
                    }
                </div>
            </div>
            <div>
                <h3>Author:
                    {validField.author.valid !== null && (!validField.author.valid
                        ? <span className={classes.error}>Choose author</span>
                        : <span className={classes.success}>Done</span>)
                    }
                </h3>
                <div className={classes.authorWrapper}>
                    {authors.map( author => <InputRadio key={author} ref={ref => {
                        if(authorRef.current.findIndex( el => el?.name === author) < 0) {
                            authorRef.current.push(ref)
                        }
                    }} id={author} label={author} name="author" />)}
                </div>
            </div>

            <p className={classes.alert}>All fields is required</p>

            <Button type="submit" className={classes.button}>Add article</Button>
        </form>
    );
};

export default React.memo(NewsForm);