import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addItem } from "../store/slices/cartSlice";

export default function ProductDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams(); // console.log(typeof productId); => string
    const products = useSelector((state) => state.product.products);

    const [selectedProduct, setSelectedProduct] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addItem({product: selectedProduct, quantity}));
        console.log(`added ${quantity} ${selectedProduct.title}(s) to the cart`);
    };
    
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(Math.max(1, quantity - 1));
    };

    const requestNavigateToShoppingCart = () => {
        const wantToNavigate = confirm('Do you want to go to the shopping cart?')
        if (wantToNavigate) {
            navigate('/cart');
        }
    };

    
    useEffect(() => {
        const foundProduct = products.find(
            (product) => product.id === parseInt(productId) //productId is a number so we have to parse it to string
        );
        setSelectedProduct(foundProduct);
    }, [productId, products]);


   if (selectedProduct === undefined) {
    return <>Loading product...</>;
   } else if (selectedProduct === null) {
    return <>Product not found</>;
   } else {
    return (
        <div id='productDetail'>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <img src={selectedProduct.image} alt='Product image' />
            <span>CHF {selectedProduct.price}</span>
            <div className='quantity-selector'>
            <button onClick={decrementQuantity} disabled={quantity === 1}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
            </div>
            <div className='buttons'>
                <button onClick={handleAddToCart}>Add to cart</button>
                <button onClick={requestNavigateToShoppingCart}>Go to cart</button>
            </div>
        </div>
        );
    }
};