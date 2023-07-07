import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App(){

    return(
        <>
            <ul>
                <li><Link to='sign-up'>Sign Up</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sign-up" element={<SignUp/>} />
            </Routes>
        </>
    )
}

export default App;