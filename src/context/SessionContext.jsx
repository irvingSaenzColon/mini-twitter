import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const SessionContext = createContext();

function SessionProvider({children}){
    const {data, saveData, removeData} = useLocalStorage('SESSION_V0');
    
    return(
        <SessionContext.Provider value={{
            session: data,
            saveSession : saveData,
            removeSession: removeData
        }}>
            { children}
        </SessionContext.Provider>
    );
};

export {SessionContext, SessionProvider};