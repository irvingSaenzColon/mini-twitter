import { useEffect, useState } from "react";

export default function useLocalStorage(key = ''){
    const [data, setData] = useState(key !== '' ? JSON.parse( window.localStorage.getItem(key) ) : null);

    useEffect(() => {
        if(key !== '' && data !== null){
            window.localStorage.setItem(key, JSON.stringify(data));
        }
    }, [data])

    const saveData = (object, key) => {
        setData(object);  
    } 

    const getData = (key) => {
        setData ( JSON.parse( window.localStorage.getItem(key) ) );
    }

    const removeData = (key) => {
        setData(null);
        window.localStorage.removeItem(key);
    }

    return {
        data,
        saveData,
        getData,
        removeData
    }
}