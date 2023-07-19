import { useId, useState } from "react";
import './Input.css';

export default function Input({value, setValue, type, placeholder, message, error}){
    const inputId = useId();
    const [filled, setFilled] = useState(false);
    
    const onBlur = (event) => {
        if(value.trim().length > 0 && !filled)
            setFilled(true);
        else if(!value.trim(0).length)
            setFilled(false);
    }

    return(
        <label className={`input ${filled ? 'input--filled' : ''} ${error && 'input--error'}`} htmlFor={inputId} >
            <span className="input__placeholder">{placeholder || 'value'}</span>
            <input 
                id={inputId} 
                value={value || ''} 
                type={type || ''} 
                onChange={(event)=>setValue(event.target.value)} 
                onBlur={onBlur} />
            <span className="input__message">{message || ''}</span>
        </label>
    )
}