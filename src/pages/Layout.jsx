import { useOutlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout(){
    const outlet = useOutlet();
    return(
       <>
        <Navbar />
        {
            outlet
        }
       </>
    );
}