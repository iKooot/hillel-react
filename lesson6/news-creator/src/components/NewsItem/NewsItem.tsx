import React, {Component} from 'react';
import classes from './NewsItem.module.scss'
import {DataType} from "../../types/dataType";
import HashtagsList from './HashtagsList/HashtagsList'
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";

type MyProps = {
    article: DataType;
    onRemoveArticle: (id: string) => void;
};

class NewsItem extends Component<MyProps> {
    render() {
        const {title, description, text, author, photo, hashtags, id} = this.props.article


        return (
            <article className={classes.article}>
                <Card className={classes.content}>
                    <img src={photo} alt={title}/>
                    <h1>{title}</h1>
                    <h3>Author:</h3>
                    <span>{author}</span>
                    <h3>Description:</h3>
                    <p>{description}</p>
                    <h3>Text:</h3>
                    <p>{text}</p>
                    <HashtagsList hashtags={hashtags}/>
                    <Button onClick={() => this.props.onRemoveArticle(id)}>Remove article</Button>
                </Card>
            </article>
        );
    }
}

export default NewsItem;