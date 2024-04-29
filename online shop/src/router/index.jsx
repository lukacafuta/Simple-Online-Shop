import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "../layouts/ProtectedRoute";
import Profile from "./Profile";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetail";

export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/products' element={<Products />}>
                        <Route path=':productId' element={<ProductDetail />} />
                        <Route index element={<>Please select a product on your left.</>} />
                    </Route>
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                    <Route path='*' element={<h1>Page not found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}; 