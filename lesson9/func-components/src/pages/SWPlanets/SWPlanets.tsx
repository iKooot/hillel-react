import React, {useState, useCallback} from 'react';
import classes from './SWPlanets.module.scss';
import {useFetchPlanetsPageData} from "./SWPlanets.hooks";
import PlanetsList from "../../components/SWPlanets/PlanetsList/PlanetsList";
import Loader from "../../components/ui/Loader/Loader";
import Error from "../../components/Error/Error";
import Pagination from "../../components/ui/Pagination/Pagination";

const SwPlanets = ({onSetPlanet}: {onSetPlanet: (url: string) => void}) => {
    const [page, setPage] = useState(1);
    const {planets, status, error, totalPages} = useFetchPlanetsPageData(page);

    const setPageHandler = useCallback((i: number) => {
        setPage(i)
    }, [])

    const goPrevPage = useCallback(() => {
        if (page !== 1) {
            setPage(prev => (prev - 1))
        }
    }, [])

    const goNexPage = useCallback(() => {
        if (page !== +totalPages) {
            setPage(prev => (prev + 1))
        }
    }, [])

    return (
        <>
            {status === 'loading' && <Loader/>}
            {status === 'error' && <Error message={error} />}
            {status === 'success' && <PlanetsList onSetPlanet={onSetPlanet} planets={planets}/>}
            {status !== 'error' && +totalPages > 1 && <Pagination className={classes.pagination} onNextClick={goNexPage} onPrevClick={goPrevPage} setPage={setPageHandler} currentPage={page} totalPages={totalPages}/>}
        </>
    );
};

export default SwPlanets;