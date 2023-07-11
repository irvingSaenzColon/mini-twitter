import './HeaderButton.css';

export default function HeaderButton({value, onClick}){
    return(
        <button className='header-button' onClick={onClick ? onClick : ()=>{}}>
            <p>{value}</p>
        </button>
    )
}