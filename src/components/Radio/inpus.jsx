import { useId } from 'react';
import './Radio.css';

export default function Radio({placeholder, name, value}){
    const id = useId();

    return(
        <label className='radio' htmlFor={id}>
            <input id={id} type="radio" name={name} readOnly checked={value === placeholder} value={placeholder} />
            <div className='radio__dot'>
                <span></span>
            </div>
            <span>{placeholder || 'radio'}</span>
        </label>
    );
}