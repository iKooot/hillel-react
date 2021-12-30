import React from 'react';
import NewsForm from "../../components/News/NewsForm/NewsForm";
import {AddNewsType} from "./AddNews.type";

const AddNews = ({onAddArticle}: AddNewsType) => {
    return <NewsForm onAddArticle={onAddArticle}/>;
};

export default AddNews;