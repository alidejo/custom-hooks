import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetche = async () => {

        setState({
            ...state, // lo esparce, para poder utilizar sus porpiedades, en este caso "isLoading":
            isLoading: true,
        });

        const resp = await fetch(url);

        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    // Cada vez que la "url" cambia se ejecuta el useEffect, de lo contrario no. 
    useEffect(() => {
        getFetche();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}