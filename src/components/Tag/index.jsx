import { Link } from 'react-router-dom';
import './Tag.css';

export default function Tag({tag}){
    const {category, title, tweets} = tag;

    return(
        <Link to={`../search/${title}`} className="explore-item">
            <span>{category} · Trending</span>
                <p>{title}</p>
            <small>{tweets} Tweets</small>
        </Link>
    )
}