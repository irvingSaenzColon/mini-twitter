import { useEffect, useId, useState } from "react";
import { PlusIcon } from "../../Icons";
import './ProfileImage.css';

export default function ProfileImage({acceptsFileType, placeholder, image, setImage}){
    const id = useId();
    const [preview, setPreview] = useState(image ? image : undefined);

    useEffect(() => {
        if(!image) return;

        const ObjectURL = URL.createObjectURL(image);
        setPreview(ObjectURL);

        return ()=> URL.revokeObjectURL(ObjectURL);
    }, [image]);

    const handleFilesSelected = (event) => {
        const imagePicked = event.target.files[0];
        setImage(imagePicked);
    }

    return(
        <label className="profile-picture" htmlFor={id}>
            {
                image ? 
                <img src={preview} alt={placeholder} /> 
                : (
                    <>
                        <PlusIcon stroke={'var(--blue-green)'} strokeWidth={3} width={50} height={50} />
                        <p>{placeholder || 'Placeholder'}</p>
                    </>
                )
            }
            
            <input id={id} type="file"  accept={acceptsFileType || ''} onChange={handleFilesSelected}/>
        </label>
    );
}