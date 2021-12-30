import React, {useState, useCallback} from 'react';
import type {NewsType} from "./types/news.type";
import Layout from "./components/Layouts/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import AllNews from "./pages/AllNews/AllNews";
import AddNews from "./pages/AddNews/AddNews";
import SwPlanets from "./pages/SWPlanets/SWPlanets";
import NotFound from "./pages/NotFound";
import SwPlanet from "./pages/SWPlanet/SWPlanet";

const App = () => {
    const [newsList, setNewsList] = useState<NewsType[]>([])
    const [planetUrl, setPlanetUrl] = useState<string>('')

    const removeArticle = useCallback((id: string) => {
        setNewsList(prev => prev.filter( article => article.id !== id))
    },[])

    const addArticle = useCallback((article: NewsType) => {
        setNewsList(prev => [article, ...prev])
    }, [])

    const setPlanet = useCallback((url: string) => {
        setPlanetUrl(url)
    }, [])

    const filterNews = useCallback((value: string, option: string) => {
        const filteredNews = [...newsList].filter( article => {
            if (option === 'content') {
                if (!article.title.includes(value) && !article.description.includes(value) && !article.text.includes(value)) {
                    return false
                }
            }
            if (option === 'hashtags') {
                if (!article.hashtags.join(' ').includes(value)) {
                    return false
                }
            }
            if (option === 'author') {
                if (!article.author.includes(value)) {
                    return false
                }
            }
            return true
        })

        setNewsList(filteredNews)
    },[newsList])

    return (
        <Layout>
            <div className="container" >
                <Switch>
                    <Route path="/" exact={true}>
                        <Redirect to='/news'/>
                    </Route>
                    <Route path="/news">
                        <AllNews onSetFilters={filterNews} list={newsList} onRemoveArticle={removeArticle}/>
                    </Route>
                    <Route path="/add-article">
                        <AddNews onAddArticle={addArticle}/>
                    </Route>
                    <Route path="/sw-planets" exact={true}>
                        <SwPlanets onSetPlanet={setPlanet}/>
                    </Route>
                    <Route path="/sw-planets/:planetName">
                        <SwPlanet url={planetUrl}/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </Layout>
    );
};

export default App;
