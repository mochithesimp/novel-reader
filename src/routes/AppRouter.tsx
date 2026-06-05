import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home/Home";
import Series from "../pages/Series/Series";
import Ebooks from "../pages/Ebooks/Ebooks";
import Novel from "../pages/Novel/Novel";
import Chapter from "../pages/Chapter/Chapter";
import Search from "../pages/Search/Search";
import Library from "../pages/Library/Library";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/series" element={<Series />} />

                    <Route path="/ebooks" element={<Ebooks />} />

                    <Route path="/search" element={<Search />} />

                    <Route path="/library" element={<Library />} />

                    <Route path="/novel/:id" element={<Novel />} />

                    <Route path="/chapter/:id" element={<Chapter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;