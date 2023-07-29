import { useId, useState } from "react";
import './Input.css';

export default function Input({value, onChangeInput, type, name='',placeholder, message, error, maxLength = 0}){
    const inputId = useId();
    const [filled, setFilled] = useState(false);
    
    const onBlur = (event) => {
        if(value.trim().length > 0 && !filled)
            setFilled(true);
        else if(!value.trim(0).length)
            setFilled(false);
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
                name={name}
                onChange={(event) => onChangeInput(event.target.value, name, maxLength)}
                onBlur={onBlur} />
        </label>
        {
            error && <span className="input__message">{message || ''}</span>
        }
        </>
    )
}