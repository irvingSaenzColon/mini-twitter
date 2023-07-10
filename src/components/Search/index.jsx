import { useId } from "react"
import { CrossIcon, SearchIcon } from "../../Icons";
import './Search.css';

export default function Search({value}){
    const idSearch = useId();

    return(
        <label className="search-bar" htmlFor={idSearch}>
            <SearchIcon />
            <input id={idSearch} type="text" value={value || ''} />
            <button className="search-bar__button">
                <CrossIcon stroke={'var(--doctor)'} strokeWidth={4} />
            </button>
        </label>
    )
}