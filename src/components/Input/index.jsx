import { useId, useState } from "react";
import './Input.css';

export default function Input({value, setValue, type, placeholder, message, error, maxLength = 0}){
    const inputId = useId();
    const [filled, setFilled] = useState(false);
    
    const onBlur = (event) => {
        if(value.trim().length > 0 && !filled)
            setFilled(true);
        else if(!value.trim(0).length)
            setFilled(false);
    }

    const onChange = (event) => {
        if(maxLength === 0){
            setValue(event.target.value);
            return;
        }

        setValue(event.target.value.slice(0, maxLength));
    }

    return(
        <>
        <label className={`input ${filled ? 'input--filled' : ''} ${error ? 'input--error' : ''}`} htmlFor={inputId} >
            <div className="input__header">
            <span className="input__placeholder">{placeholder || 'value'}</span>
            <span className={`input__max-length ${maxLength && 'input__max-length--visible'}`}>{ maxLength!== 0 ? `${value.length} / ${maxLength}` : 0}</span>
            </div>
            <input 
                id={inputId}
                value={value || ''}
                type={type || ''}
                onChange={onChange}
                onBlur={onBlur} />
        </label>
        {
            error && <span className="input__message">{message || ''}</span>
        }
        </>
    )
}