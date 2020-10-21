import {useEffect, useRef, useState} from "react";


const useFetch = ( url ) => {

    const isMonuted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMonuted.current = false;
        };
    }, []);


    useEffect(() => {

        setState({data: null, loading: true, error: null});

        fetch(url)
            .then( resp => resp.json() )
            .then(data => {

                    if (isMonuted.current) {
                        setState({
                            data,
                            loading: false,
                            error: null,
                        })
                    }
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'hubo un error',
                })
            })

    }, [url]);

    return state

};

export default useFetch;
