import React from 'react';
import classes from  './SWPlanet.module.scss'
import {useHistory} from "react-router-dom";
import type { SWPlanetPropType } from './SWPlanet.type';
import {useFetchPlanetData} from "./SWPlanet.hooks";
import Planet from "../../components/SWPlanets/Planet/Planet";
import Button from "../../components/ui/Button/Button";
import Loader from "../../components/ui/Loader/Loader";
import Error from "../../components/Error/Error";

const SwPlanet = ({url}: SWPlanetPropType) => {
    const history = useHistory()
    const {planet, status, error} = useFetchPlanetData(url)

    return (
        <>
            {status === 'loading' && <Loader/>}
            {status === 'error' && <Error message={error}/>}
            {status === 'success' && planet && <Planet planet={planet} />}
            {status !== 'loading' && !planet && <div className={classes.goBackWrapper}>
                <h1>Choose planet here</h1>
                <div>
                    <Button onClick={() => history.replace('/sw-planets')}>
                        Go to planets page
                    </Button>
                </div>
            </div>}
        </>
    );
};

export default SwPlanet;