import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

export default function useSession(){
    const context = useContext(SessionContext);

    if(!context)
        throw new Error('useSession must be within a Session Provider');
    
    return context;
}