import { CrossIcon } from '../../Icons';
import './GalleryItem.css';

export default function GalleryItem({galleryItem, onRemoveImage, editable = false}){
    const {id, url} = galleryItem;
    return(
        <div className='grid-gallery__item'>
            <img
                src={url} 
                alt="Representative element from a gallery of pictures" />
            {
                editable  &&
                (
                    <button type='button' onClick={onRemoveImage ?  ()=>onRemoveImage(id) : ()=>{}}>
                        <CrossIcon width={10} height={10} stroke={'var(--doctor)'} strokeWidth={2} />
                    </button>
                )
            }
        </div>        
    );
}