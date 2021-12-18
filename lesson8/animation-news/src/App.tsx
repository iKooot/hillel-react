import React, {Component} from 'react';
import classes from './App.module.scss';
import gsap from 'gsap';
import Button from "./components/ui/Button/Button";
import NewsForm from "./components/NewsForm/NewsForm";
import {NewsType} from "./types/news.type";
import NewsList from "./components/NewsList/NewsList";

type MyProps = {}
type MyState = {
    showForm: boolean;
    news: NewsType[];
}

class App extends Component<MyProps, MyState> {
    state = {
        showForm: false,
        news: []
    }

    private titleRef = React.createRef<HTMLHeadingElement>()
    private buttonRef = React.createRef<HTMLButtonElement>()
    private listRef = React.createRef<HTMLUListElement>()

    showFormHandler = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addArticle = (article: NewsType) => {
        this.setState(prev => ({
            ...prev,
            news: [article, ...prev.news]
        }))
    }

    removeArticle = (id: string) => {
        this.setState(prev => ({
            news: prev.news.filter( article => article.id !== id)
        }))
    }

    componentDidMount() {
        const title = this.titleRef.current;
        const button = this.buttonRef.current;
        const list = this.listRef.current;

        const timeline = gsap.timeline();

        const titleTransition = gsap.fromTo(title, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'linear',
            duration: 1,
        });
        timeline.add(titleTransition);

        const buttonTransition = gsap.fromTo(button, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: 'linear',
            duration: 1,
        });
        timeline.add(buttonTransition, "-=0.3");

        const listTransition = gsap.fromTo(list, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: 'linear',
            duration: 1,
        });
        timeline.add(listTransition, "-=0.3");
    }

    render() {
        const {showForm, news } = this.state;
        return (
            <div className="container" >
                <h1 ref={this.titleRef}>News generator with animation</h1>
                {!showForm && <Button ref={this.buttonRef} className={classes.showForm} onClick={this.showFormHandler}>Add new article</Button>}
                {showForm && <NewsForm onAddArticle={this.addArticle} onCloseForm={this.showFormHandler}/>}
                <NewsList ref={this.listRef} list={news} onRemoveArticle={this.removeArticle}/>
            </div>
        )
    }
}

export default App;
