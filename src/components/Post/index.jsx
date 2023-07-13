import Gallery from "../Gallery";
import GalleryItem from "../GalleryItem";

export default function Post({post}){
    const {id, images, description} = post;

    const onLike = (event) => {

    }

    const onRetweet = (event) => {
        
    }

    return(
        <article>
            <p>{description}</p>
            <Gallery>
                {
                    images.map(image => ( <GalleryItem galleryItem={image} /> ))
                }
            </Gallery>
            <section>
                <button onClick={onLike}>
                    like
                </button>
                <button onClick={onRetweet}>retweet</button>
            </section>
        </article>
    )
}