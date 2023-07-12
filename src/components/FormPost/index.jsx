import { useEffect, useId, useRef, useState } from "react";
import { MediaIcon } from "../../Icons";
import imageProfile  from '../../assets/profile.webp';
import Button from "../Button";
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
        if(description.trim().length > 0)
            setDisabled(false);
        else if(description.trim().length === 0 && !disabled)
            setDisabled(true);
    }, [description])

    const onChangeDescription = (event) => {
        if(description.length > 254) return;

        setDescription(event.target.value);

        // This handles the auto-resize of a textarea whenever it reaches the end.
        event.target.style.height = 'inherit';
        event.target.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    return(
        <form className="form-post">
            <section className="form-post__header">
                <img className="form-post__image" src={imageProfile} alt="Represents a profile image of the user that is gonna send a post" />
                <textarea 
                    id={textAreaId} 
                    ref={textareaRef} 
                    cols="30" rows="2" 
                    placeholder="What is happening?" 
                    value={description} 
                    onChange={onChangeDescription}></textarea>
                <div className="form-post__previews">
                    
                </div>
            </section>
            <section className="form-post__meta">
                <div>
                    <label className="form-post__media" htmlFor={mediaInputId}>
                        <input id={mediaInputId} type="file" accept="image/*" />
                        <MediaIcon stroke={'var(--blue-green)'} strokeWidth={2}  />
                    </label>
                </div>
                <Button styleClasses={['button--primary']} disabled={disabled}>Tweet</Button>
            </section>
        </form>
    )
}