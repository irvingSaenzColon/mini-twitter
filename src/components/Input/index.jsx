import { useId, useState } from "react";
import './Input.css';

export default function Input({value, setValue, type, placeholder}){
    const inputId = useId();
    const [filled, setFilled] = useState(false);
    
    const onBlur = (event) => {
        if(value.trim().length > 0 && !filled)
            setFilled(true);
        else
            setFilled(false);
    }

    return(
        <label className={`input ${filled ? 'input--filled' : ''}`} htmlFor={inputId} >
            <input 
                id={inputId} 
                value={value || ''} 
                type={type || ''} 
                onChange={(event)=>setValue(event.target.value)} 
                onBlur={onBlur} />
            <span className="input__placeholder">{placeholder || 'value'}</span>
        </label>
    )
}