import { useState } from 'react';
import { CrossIcon } from '../Icons';
import regularImage from '../assets/profile.webp';
import './test.css';

export default function TestPage(){

    const [images, setImages] = useState([
        regularImage, regularImage, regularImage, regularImage
    ]);

    const onRemoveImage = (id) => {
        setImages( images.filter( (image, index) => index !== id) );
    }

    return (
        <main>
            <section
            className={`grid-gallery grid-gallery--${images.length}`}>
                {
                    images.map((image, index) => (
                        <div key={index} className='grid-gallery__item'>
                            <img
                                src={image} 
                                alt="Representative element from a gallery of pictures" />
                            <button type='button' onClick={()=>onRemoveImage(index)}>
                                <CrossIcon width={10} height={10} stroke={'var(--doctor)'} strokeWidth={2} />
                            </button>
                        </div>        
                    ))
                }
            </section>
        </main>
    )
}