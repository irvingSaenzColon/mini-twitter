import { useId } from "react"
import { CrossIcon, SearchIcon } from "../../Icons";
import './SearchBar.css';

export default function SearchBar({value, setValue}){
    const idSearch = useId();

    return(
        <label className="search-bar" htmlFor={idSearch}>
            <SearchIcon  stroke={'var(--silent-night)'}/>
            <input id={idSearch} onChange={(event) => setValue(event.target.value) } type="text" value={value} />
            {
                value?.length > 0 &&
                <button className="search-bar__button">
                    <CrossIcon stroke={'var(--doctor)'} strokeWidth={4} />
                </button>
            }
        </label>
    )
}