import React from 'react';
import classes from './MainNavigation.module.scss'
import {NavLink} from "react-router-dom";
import Navigation from "../../Navigation/Navigation";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>Homework 9</NavLink>
            <Navigation/>
        </header>
    );
};

export default MainHeader;