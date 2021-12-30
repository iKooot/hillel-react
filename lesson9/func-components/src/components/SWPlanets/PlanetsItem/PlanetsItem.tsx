import React from 'react';
import classes from './PlanetsItem.module.scss'
import type {PlanetsItemPropType} from "./PlanetsItem.type";
import Button from "../../ui/Button/Button";
import {useHistory} from "react-router-dom";

const PlanetsItem = ({planet, onSetPlanet}: PlanetsItemPropType) => {
    const history = useHistory();
    const clickButtonHandler = () => {
        history.push(`/sw-planets/${planet.name.toLowerCase()}`)
        onSetPlanet(planet.url)
    }
    return (
        <li className={classes.item}>
            <h3 className={classes.title}>{planet.name}</h3>
            <Button onClick={clickButtonHandler} transparent={true}>Reed more about planet</Button>
        </li>
    );
};

export default PlanetsItem;