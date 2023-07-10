import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const SessionContext = createContext();

function SessionProvider({children}){
    const SESSION_KEY = 'SESSION_V0';
    const {data, saveData, removeData} = useLocalStorage(SESSION_KEY);
    
    
    return(
        <SessionContext.Provider value={{
            session: data,
            saveSession : saveData,
            removeSession: removeData,
            session_key: SESSION_KEY
        }}>
            { children}
        </SessionContext.Provider>
    );
};

export {SessionContext, SessionProvider};