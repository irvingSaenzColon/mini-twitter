import './Group.css';

export default function Group({children, styleClasses, onChange}){

    return(
        <div onChange={onChange} className={`group ${styleClasses ? styleClasses.join(' ') : ''}`}>
            {children}
        </div>
    )
}