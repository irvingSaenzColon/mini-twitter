import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import Home from "./pages/Home";
import TestPage from "./pages/test";
import Layout from "./pages/Layout";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App(){

    return(
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="profile/:id" element={<Profile />} />
                    <Route path="search" element={<Explore />} />
                    <Route path="search/:searched" element={<Search />} />
                </Route>
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </>
    )
}

export default App;