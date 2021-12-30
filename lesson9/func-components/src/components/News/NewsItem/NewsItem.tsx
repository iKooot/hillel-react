import React from 'react';
import classes from './NewsItem.module.scss'
import Card from "../../ui/Card/Card";
import {NewsItemType} from "./NewsItem.type";
import Button from "../../ui/Button/Button";
import HashtagsList from "./HashtagsList/HashtagsList";

const NewsItem = ({article, onRemoveArticle}: NewsItemType) => {
    const {title, description, text, author, photo = '', hashtags, id} = article

    return (
        <li>
            <article className={classes.article}>
                <Card className={classes.content}>
                    <div className={classes.imgWrapper}>
                        <img src={photo} alt={title}/>
                    </div>
                    <div className={classes.contentWrapper}>
                        <h1>{title}</h1>
                        <h3>Author:</h3>
                        <span>{author}</span>
                        <h3>Description:</h3>
                        <p>{description}</p>
                        <h3>Text:</h3>
                        <p>{text}</p>
                        <HashtagsList hashtags={hashtags}/>
                        <Button onClick={() => onRemoveArticle(id)}>Remove article</Button>
                    </div>
                </Card>
            </article>
        </li>
    );
};

export default NewsItem;