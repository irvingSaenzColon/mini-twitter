import './Button.css';

export default function Button({children, type, styleClasses, onClickButton}){
  return (
    <button onClick={onClickButton ? onClickButton : ()=>{}} className={`button ${styleClasses ? styleClasses.join(' ') : ''}`} type={type || 'button'}>
        {children}
    </button>
  )
  }