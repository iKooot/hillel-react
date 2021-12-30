import {useEffect, useState} from "react";
import {PlanetItemPageType} from "../../types/planet.type";

export function useFetchPlanetsPageData(page: number) {
    const [planets, setPlanets] = useState<PlanetItemPageType[]>([])
    const [totalPages, setTotalPages] = useState<string>('1')
    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading')

    const fetchData = async () => {
        setStatus('loading')

        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/?page=${page}&limit=10`)

            if (!response.ok) throw new Error('Server not work');

            const data = await response.json()

            console.log(data)

            setStatus('success')
            setTotalPages(data["total_pages"])
            setPlanets(data.results)
        } catch (e) {
            setStatus('error')
            if (typeof e === "string") {
                setError(e)
            } else if ( e instanceof Error) {
                setError(e.message)
            } else {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return {
        status,
        error,
        planets,
        totalPages,
    }
}