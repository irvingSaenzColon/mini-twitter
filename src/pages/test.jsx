import { useRef, useState } from "react";

export default function TestPage(){
  
    const [text, setText] = useState('');
    const textAreaRef = useRef();

    const onChangeText = (event) => {
        setText(event.target.value);
        event.target.style.height = 'inherit';
        event.target.style.height = `${textAreaRef.current.scrollHeight}px`;
    }

    return (
        <main>
           <textarea
           ref={textAreaRef}
           style={{
            fontSize:'1.5rem',
            resize:'none',
            overflow:'hidden'
           }}
            cols="30" rows="1"
            placeholder="Escribe algo"
            value={text}
            onChange={onChangeText}
            />
            
        </main>
    )
}