import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "../layouts/ProtectedRoute";
import Profile from "./Profile";

export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/overview' element={<h1>Overview</h1>} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/cart' element={<h1>Shopping Cart</h1>} />
                    </Route>
                    <Route path='*' element={<h1>Page not found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}; 