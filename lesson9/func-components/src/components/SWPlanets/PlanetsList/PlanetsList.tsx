import React from 'react';
import classes from './PlanetsList.module.scss'
import type {PlanetsListPropType} from "./PlanetsList.type";
import PlanetsItem from "../PlanetsItem/PlanetsItem";

const PlanetsList = ({planets, onSetPlanet}: PlanetsListPropType) => {
    return (
        <ul className={classes.list}>
            {planets.map( el => <PlanetsItem onSetPlanet={onSetPlanet} key={el.uid} planet={el} />)}
        </ul>
    );
};

export default PlanetsList;