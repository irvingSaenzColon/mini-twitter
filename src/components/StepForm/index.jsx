import './StepForm.css';

export default function StepForm({children, showAnimation, hideAnimation, active}){
    return(
        <section className={`step-form ${active ? 'step-form--active' : ''} ${showAnimation} ${hideAnimation}`}>
            {children}
        </section>
    )
}