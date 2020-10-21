import {useState} from "react";

function useCounter( initialState = 10 ) {

    const [counter, setCounter] = useState( initialState );

    const increment = () => {
        setCounter( counter +1 )
    };

    const decrement = () => {
        setCounter( counter -1 )
    };

    const reset = () => {
        setCounter(initialState)
    };

    return{
        counter,
        increment,
        reset,
        decrement,
    }

}

export default useCounter;