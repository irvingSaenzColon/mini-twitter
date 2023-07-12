import './Button.css';

export default function Button({children, type, styleClasses, onClickButton, disabled = false}){
  return (
    <button disabled={disabled} 
            onClick={onClickButton ? onClickButton : ()=>{}} 
            className={`button ${disabled ? 'button--disabled' : ''} ${styleClasses ? styleClasses.join(' ') : ''}`} 
            type={type || 'button'}>
        {children}
    </button>
  )
  }