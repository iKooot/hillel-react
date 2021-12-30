import React from 'react';
import type {PlanetPropType} from "./Planet.type";
import classes from './Planet.module.scss'
import Button from "../../ui/Button/Button";
import {useHistory} from "react-router-dom";

const Planet = ({planet}: PlanetPropType) => {
    const  history = useHistory()
    return (
        <div className={classes.planet}>
            <h1>{planet.name}</h1>
            <ul className={classes.list}>
                <li>
                    Climate: <span className={classes.describe}>{planet.climate}</span>
                </li>
                <li>
                    Created: <span className={classes.describe}>{planet.created}</span>
                </li>
                <li>
                    Edited: <span className={classes.describe}>{planet.edited}</span>
                </li>
                <li>
                    Diameter: <span className={classes.describe}>{planet.diameter}</span>
                </li>
                <li>
                    Gravity: <span className={classes.describe}>{planet.gravity}</span>
                </li>
                <li>
                    Orbital period: <span className={classes.describe}>{planet.orbital_period}</span>
                </li>
                <li>
                    Rotation period: <span className={classes.describe}>{planet.rotation_period}</span>
                </li>
                <li>
                    Surface water: <span className={classes.describe}>{planet.surface_water}</span>
                </li>
                <li>
                    Terran: <span className={classes.describe}>{planet.terrain}</span>
                </li>
                {planet.films
                    && <li>
                        Find in movies: <ul>{planet.films.map( (movie, i) => <a href={movie}>movie {i}</a>)}</ul>
                    </li>
                }
                {planet.residents
                    && <li>
                        Residents: <ul>{planet.films.map( (movie, i) => <a href={movie}>movie {i}</a>)}</ul>
                    </li>
                }
            </ul>
            <Button transparent={true} className={classes.button} onClick={() => history.push('/sw-planets')}>Go to all planets</Button>
        </div>
    );
};

export default Planet;