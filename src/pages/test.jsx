import { useEffect, useRef, useState } from 'react';

import './test.css';
import CheckBox from '../components/CheckBox';

export default function TestPage(){

    const [descriptionOriginal, setDescriptionOriginal] = useState('');
    const [descriptionSplited, setDescriptionSplited] = useState('');
    const spanRef = useRef();

    useEffect(()=>{
        if(descriptionOriginal.length <= 0) return;
        const arr = descriptionOriginal.split(new RegExp(/(#[A-Za-z0-9_]+)/, 'gi'));
        console.log(arr);
        const innerHtml = arr.map(words => `<span class="${(words[0] === '#' && words.length > 1) ? 'input__haighlight' : ''}">${words}</span>`)
        console.log(innerHtml.join(' '));
        spanRef.current.innerHtml = innerHtml.join(' ');

    }, [descriptionOriginal])

    const onChangeDescription = (event) => {
        event.preventDefault()
        const desc = event.target.innerText.slice(0, 254);

        setDescriptionOriginal(desc);

        // descriptionSplited.map(words => (<span className={(words[0] === '#' && words.length > 1) ? 'input__haighlight' : ''}>{words}</span>))

        // This handles the auto-resize of a textarea whenever it reaches the end.
        event.target.style.height = 'inherit';
        event.target.style.height = `${spanRef.current.scrollHeight}px`;
    }

    return (
        <main>  
            <CheckBox placeholder='Amigo' />
        </main>
    )
}