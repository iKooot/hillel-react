import React, {Component} from 'react';
import { makeNews } from "./data/data";
import {DataType} from "./types/dataType";
import classes from './App.module.scss'
import NewsList from "./components/NewsList/NewsList";
import NewsForm from "./components/NewsForm/NewsForm";
import NewsFilters from "./components/NewsFilters/NewsFilters";
import Button from "./components/ui/Button/Button";

type MyProps = {}
type MyState = {
    newsList: DataType[];
    editNews: boolean;
    filter: {
        option: string;
        value: string;
    }
}

class App extends Component<MyProps, MyState> {
    state = {
        newsList: makeNews(10),
        editNews: false,
        filter: {
            option: 'content',
            value: '',
        }
    }

    editHewsHandle = () => {
        this.setState({editNews: !this.state.editNews})
    }

    addNews = (article: DataType): void => {
        this.setState({
            newsList: [article, ...this.state.newsList]
        })
    }

    removeArticle = (id: string): void => {
        this.setState({newsList: this.state.newsList.filter(article => article.id !== id)})
    }

    filterNewsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prev => ({
            ...prev,
            filter: {
                ...prev.filter,
                value: event.target.value
            }
        }))
    }

    setFilterOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState(prev => ({
            ...prev,
            filter: {
                ...prev.filter,
                option: event.target.value
            }
        }))
    }

    render() {
        const filterNews = this.state.newsList.filter( article => {
            const {option, value } = this.state.filter
            const convertValue = value.toLowerCase()

            if (option === 'content') {
                return article.text?.toLowerCase().includes(convertValue)
                    || article.description?.toLowerCase().includes(convertValue)
                    || article.title?.toLowerCase().includes(convertValue)
            }

            if (option === 'author') {
                return article.author?.toLowerCase().includes(convertValue)
            }

            if (option === 'hashtags') {
                return article.hashtags?.join(' ').includes(value)
            }

            return true
        })

        return (
            <div className="container">
                <h1>News creator</h1>
                {!this.state.editNews && <Button onClick={this.editHewsHandle} className={classes.button}>Edit news</Button>}
                {this.state.editNews && <NewsForm onClose={this.editHewsHandle} onAddNewArticle={this.addNews}/>}
                <NewsFilters select={this.state.filter.option} onSetFilterOption={this.setFilterOption} onChange={this.filterNewsHandler}/>
                <NewsList data={filterNews} onRemoveArticle={this.removeArticle}/>
            </div>
        );
    }
}

export default App;
