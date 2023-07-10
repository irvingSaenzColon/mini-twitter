import './Form.css';

export default function Form({children, styleClasses, onSubmitEvent}){
  

  return (
    <form onSubmit={onSubmitEvent} className={`form ${styleClasses ? styleClasses.join(' '): ''}`}>
        {children}
    </form>
  )
}