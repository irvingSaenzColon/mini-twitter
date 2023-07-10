import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import Home from "./pages/Home";
import TestPage from "./pages/test";
import Layout from "./pages/Layout";

function App(){

    return(
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile:id" element={<><h1 className="title">Profile</h1></>} />
                </Route>
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </>
    )
}

export default App;