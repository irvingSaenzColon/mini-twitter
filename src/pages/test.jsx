import { useEffect, useState } from "react";
import StepForm from "../components/StepForm";
import { useCounter } from "../hooks/counter";

export default function TestPage(){
    const [animation, setAnimation] = useState('');
    const [hideAnimation, setHideAnimation] = useState('');
    const {counter, increaseCounter, decreaseCounter} = useCounter(0);
    const [mode, setMode] = useState(true);

    useEffect(()=>{
        if(mode)
            setAnimation('step-form--show-reverse');
        else
            setAnimation('step-form--show');
    }, [counter]);

    useEffect(() => {
        if(hideAnimation === '') return;

        setTimeout(()=> {
            if(mode)
                increaseCounter();
            else 
                decreaseCounter();
            setHideAnimation('');
        }, 500);
    }, [hideAnimation]);

    const onPreviousPage = (event) => {
        if(currentPage <= 0) return;

        setHideAnimation('step-form--hide');
        setMode(false);
    }
    
    const onNexPage = (event) => {
        // Current should hide with animation and set current to next one
        setHideAnimation('step-form--hide-reverse');
        setMode(true);
    } 

    return (
        <main>
            <h1 className="title">Test page</h1>
            <StepForm active={counter === 0} showAnimation = {animation} hideAnimation={hideAnimation} >
                <h2 style={{color: "white", fontSize: '2.4rem', textAlign: 'center'}}>Hola, soy bien cool 1</h2>
            </StepForm>
            <StepForm active={counter === 1} showAnimation = {animation} hideAnimation={hideAnimation}>
                <h2 style={{color: "white", fontSize: '2.4rem', textAlign: 'center'}}>Hola, soy bien cool 2</h2>
            </StepForm>
            <StepForm active={counter === 2} showAnimation = {animation} hideAnimation={hideAnimation}>
                <h2 style={{color: "white", fontSize: '2.4rem', textAlign: 'center'}}>Hola, soy bien cool 3</h2>
            </StepForm>
            <br />
            {
                counter > 0 && <button onClick={onPreviousPage}>Previous</button>
            }
            {
                counter < 2 &&  <button onClick={onNexPage}>Next</button>
            }
            
            
        </main>
    )
}