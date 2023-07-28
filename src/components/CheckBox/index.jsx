import { useId } from 'react';
import './CheckBox.css';

const CheckBox = ({placeholder = ''}) => {
    const inputId = useId();

  return (
    <label className='checkbox' htmlFor={inputId}>
        <input id={inputId} type="checkbox" value={placeholder} />
        <span>{placeholder}</span>
    </label>
  )
}

export default CheckBox