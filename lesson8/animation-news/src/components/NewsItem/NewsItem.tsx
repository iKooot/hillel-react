import React, {Component, createRef} from 'react';
import classes from './NewsItem.module.scss'
import {NewsType} from "../../types/news.type";
import Button from "../ui/Button/Button";
import gsap from 'gsap';

type MyProps = {
    article: NewsType;
    onRemoveArticle: (id: string) => void;
}

class NewsItem extends Component<MyProps> {
    private itemRef = createRef<HTMLLIElement>()

    removeItemHandler = () => {
        gsap.fromTo(this.itemRef.current, {
            x: 0,
            opacity: 1,
        }, {
            x: 100,
            opacity: 0,
            ease: 'linear',
            duration: 1,
            onComplete: () => {
                this.props.onRemoveArticle(this.props.article.id)
            }
        });
    }

    componentDidMount() {
        const item = this.itemRef.current;

        gsap.fromTo(item, {
            x: -100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            ease: 'linear',
            duration: 1,
        });
    }

    render() {
        const {title, description, hashtags} = this.props.article;

        return (
            <li ref={this.itemRef} className={classes.item}>
                <h2 className={classes.title}>{title}</h2>
                <h3 className={classes.subTitle}>Description:</h3>
                <p className={classes.description}>{description}</p>
                <h3 className={classes.subTitle}>Hashtags:</h3>
                <ul className={classes.list}>
                    {
                        hashtags.length > 0 && hashtags.map( el => <li key={el.id}>{el.label}</li>)
                    }
                </ul>
                <Button className={classes.button} transparent={true} onClick={this.removeItemHandler}>Remove article</Button>
            </li>
        );
    }
}

export default NewsItem;