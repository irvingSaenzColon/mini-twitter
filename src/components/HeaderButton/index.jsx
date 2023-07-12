import { useId } from 'react';
import './HeaderButton.css';

export default function HeaderButton({value, defaultActive}){
    const idRadio = useId();

    return(

        <label className='header-button' htmlFor={idRadio} >
            <input id={idRadio} type="radio" defaultChecked={defaultActive} name='header-button' readOnly />
            <p>{value}</p>
        </label>
    )
}