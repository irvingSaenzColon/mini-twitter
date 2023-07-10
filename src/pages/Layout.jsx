import { useOutlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

export default function Layout(){
    const outlet = useOutlet();
    return(
       <main className="main-content">
        <Sidebar />
        {
            outlet
        }
       </main>
    );
}