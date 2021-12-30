import {useEffect, useState} from "react";
import type {PlanetType} from "../../types/planet.type";

export function useFetchPlanetData(url: string) {
    const [planet, setPlanet] = useState<PlanetType | null>(null)
    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading')

    const fetchData = async () => {
        setStatus('loading')

        try {
            const response = await fetch(url)

            if (!response.ok) throw new Error('Server not work');

            const data = await response.json()

            console.log(data)

            setStatus('success')
            setPlanet(data.result.properties)
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
    }, [url])

    return {
        status,
        error,
        planet,
    }
}