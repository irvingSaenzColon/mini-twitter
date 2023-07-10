import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increaseCounter = () => {
        setCounter(prevState => prevState + 1);
    }

    const decreaseCounter = () => {
        setCounter(prevState => prevState - 1);
    }

    const resetCounter = () => setCounter(initialValue);


    return{
        counter,
        increaseCounter,
        decreaseCounter,
        resetCounter
    }

}