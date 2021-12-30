import React from 'react';
import classes from './MainFooter.module.scss'
import Navigation from "../../Navigation/Navigation";

const MainFooter = () => {
    return (
        <footer className={classes.footer}>
            <Navigation/>
        </footer>
    );
};

export default MainFooter;