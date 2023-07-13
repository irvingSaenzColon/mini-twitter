import './Gallery.css';

export default function Gallery({children ,length}){

    return(
        <div className={`grid-gallery grid-gallery--${length}`}>
            {
                children
            }
        </div>
    )
}