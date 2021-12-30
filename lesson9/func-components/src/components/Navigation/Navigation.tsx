import React from 'react';
import classes from "./Navigation.module.scss";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/news" activeClassName={classes.active}>All News</NavLink>
                </li>
                <li>
                    <NavLink to="/add-article" activeClassName={classes.active}>Add new article</NavLink>
                </li>
                <li>
                    <NavLink to="/sw-planets" activeClassName={classes.active}>SW Planets</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;