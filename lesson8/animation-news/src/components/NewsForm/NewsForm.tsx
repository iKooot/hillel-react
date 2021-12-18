import React, {Component} from 'react';
import gsap from "gsap";
import classes from './NewsForm.module.scss'
import InputText from "../ui/InputText/InputText";
import Button from "../ui/Button/Button";
import InputTextArea from "../ui/InputTextArea/InputTextArea";
import InputCheckbox from "../ui/InputCheckbox/InputCheckbox";
import {hashtag, NewsType} from "../../types/news.type";

type MyProps = {
    onAddArticle: (article: NewsType) => void;
    onCloseForm: () => void;
}

class NewsForm extends Component<MyProps> {
    state = {
        hashtags: [
            {label: '#cat', id: `cat - ${Math.random()}`},
            {label: '#dog', id: `dog - ${Math.random()}`},
            {label: '#hot', id: `hot - ${Math.random()}`},
        ],
    }

    private formRef = React.createRef<HTMLFormElement>();
    private titleRef = React.createRef<HTMLInputElement>();
    private descriptionRef = React.createRef<HTMLTextAreaElement>();
    private hashtagsRef: HTMLInputElement[] = [];

    resetForm = () => {
        if (this.titleRef.current) {
            this.titleRef.current.value = ''
        }
        if (this.descriptionRef.current) {
            this.descriptionRef.current.value = ''
        }

        this.hashtagsRef.forEach( el => {
            el.checked = false
        })
    }

    closeHandler = () => {
        const form = this.formRef.current

        gsap.fromTo(form, {
            opacity: 1,
            height: 'auto',
        }, {
            opacity: 0,
            ease: 'linear',
            duration: 0.25,
            height: 0,
            onComplete: () => {
                this.props.onCloseForm()
            }
        })
    }

    componentDidMount() {
        const form = this.formRef.current

        gsap.fromTo(form, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: 'linear',
            duration: 1,
        })
    }

    submitHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        const title = this.titleRef.current
        const description = this.descriptionRef.current
        const hashtags: hashtag[] = []

        if (!title?.value) {
            title?.focus()
            return
        } else if (!description?.value) {
            description?.focus()
            return
        }

        this.hashtagsRef.forEach( el => {
            if(el.checked) {
                hashtags.push({
                    label: el.name,
                    id: `${el.name} - ${Math.random()}`
                })
            }
        })

        this.props.onAddArticle({
            id: `${title}-${Math.random()}`,
            title: title?.value,
            description: description?.value,
            hashtags
        })

        this.resetForm()
        this.closeHandler()
    }

    render() {
        const {hashtags} = this.state

        return (
            <form ref={this.formRef} className={classes.form} onSubmit={this.submitHandler}>
                <InputText
                    className={classes.inputWrapper}
                    name="title"
                    label="Enter title"
                    ref={this.titleRef}
                />
                <InputTextArea
                    className={classes.inputWrapper}
                    name="description"
                    label="Enter description"
                    ref={this.descriptionRef}
                />
                <div className={classes.checkboxWrapper}>
                    {hashtags.map( hashtag => <InputCheckbox
                        key={hashtag.label}
                        label={hashtag.label}
                        id={hashtag.id}
                        ref={ref => {
                            if (ref) {
                                this.hashtagsRef.push(ref)
                            }
                        }}
                    />)}
                </div>
                <Button type="submit">Add article</Button>
            </form>
        );
    }
}

export default NewsForm;