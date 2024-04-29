import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/slices/productSlice";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
    
    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);

    const fetchProducts = async () => {
        try{
            // fetch products
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            // console.log(res);
            console.log(data);

            // dispatch to store
            dispatch(loadProducts(data))
        } catch(error) {
            console.error('Could not fetch products', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div id='products'>
            <aside>
                <h1>Our products:</h1>
                {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                ))}
            </aside>
            <Outlet />
        </div>   
    );
};