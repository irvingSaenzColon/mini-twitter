import { useEffect, useId, useRef, useState } from "react";
import { MediaIcon } from "../../Icons";
import { generateId } from "../../helpers";
import imageProfile  from '../../assets/profile.webp';
import Button from "../Button";
import Gallery from "../Gallery";
import GalleryItem from "../GalleryItem";
import './FormPost.css';

export default function FormPost(){
    const textAreaId = useId();
    const mediaInputId = useId();

    const textareaRef = useRef();

    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        if(description.trim().length > 0 || files.length)
            setDisabled(false);
        else if((description.trim().length === 0 && !files.length) && !disabled)
            setDisabled(true);
    }, [description]);

    useEffect(() => {
        if( description.trim().length > 0 || files.length )
            setDisabled(false);
        else if(description.trim().length === 0 && !files.length)
            setDisabled(true);

        if(!files.length && previews.length){
            setPreviews([]);
            return;
        } else if(!files.length && !previews.length) return;

        const newPreviews = files.map(file => {
            return {id: file.id, url: URL.createObjectURL(file.content)}
        })

        setPreviews(newPreviews);

        return ()=>{
            previews.forEach(preview => {
                URL.revokeObjectURL(preview.url);
            });
            
        };
    }, [files]);

    const handleFilesSelected = (event) => {
        const imagePicked = Array.from(event.target.files);

        if((files.length + imagePicked.length) > 4) return;

        const newFiles = imagePicked.map(image => {
            return {id: generateId(), content: image}
        });

        setFiles([...files,...newFiles]);
    }

    const onChangeDescription = (event) => {
        const desc = event.target.value;

        setDescription(desc.slice(0, 254));

        // This handles the auto-resize of a textarea whenever it reaches the end.
        event.target.style.height = 'inherit';
        event.target.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    const onRemoveImage = (id) => {
        previews.forEach(preview => URL.revokeObjectURL(preview.url) );
        
        const newFiles = files.filter(file => file.id !== id);
        setFiles(newFiles);
    }

    return(
        <form className="form-post">
            <section className="form-post__header">
                <img className="form-post__image" src={imageProfile} alt="Represents a profile image of the user that is gonna send a post" />
                <textarea 
                    id={textAreaId} 
                    ref={textareaRef} 
                    cols="30" rows="2" 
                    placeholder="What is happening?!" 
                    value={description} 
                    onChange={onChangeDescription}></textarea>
                <div className={`section--left ${!previews.length ? 'inactive' : ''}`}>
                    <Gallery length={previews.length}> 
                    {
                        previews.map(preview => ( <GalleryItem key={preview.id} galleryItem={preview} onRemoveImage={onRemoveImage} editable={true} /> ))
                    }
                    </Gallery>
                </div>
            </section>
            <section className="form-post__meta">
                <div>
                    <label className="form-post__media" htmlFor={mediaInputId}>
                        <input 
                        id={mediaInputId} 
                        type="file" 
                        accept="image/*" 
                        multiple  
                        onChange={handleFilesSelected}/>
                        <MediaIcon stroke={'var(--blue-green)'} strokeWidth={2}  />
                    </label>
                </div>
                <Button styleClasses={['button--primary']} disabled={disabled}>Tweet</Button>
            </section>
        </form>
    )
}