import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  reduceQuantity,
  increaseQuantity,
} from "../store/slices/cartSlice";
import {
  CartButtons,
  CartContainerHeaderStyled,
  CartContainerStyled,
  CartItemStyled,
  TotalContainerStyled,
} from "../StyledComponents/CartStyled";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleReduceQuantity = (index) => {
    dispatch(reduceQuantity(index));
  };

  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  //calculate total price of the cart
  const totalPrice = cartItems
    .reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0)
    .toFixed(2); //round the total price to two decimals

  return (
    <>
      <CartContainerStyled>
        <CartContainerHeaderStyled>
          <h1>Selected products:</h1>
        </CartContainerHeaderStyled>
        {cartItems.map((item, index) => (
          <CartItemStyled key={index}>
            <img src={item.product.image} alt={item.product.title} />
            <span className="item-name">{item.product.title}</span>
            <div className="item-price">
              <label>Price:</label> CHF {item.product.price * item.quantity}
            </div>
            <div className="item-quantity">
              <label>Quantity:</label> {item.quantity}
            </div>
            <CartButtons>
              <button onClick={() => handleReduceQuantity(index)}>-</button>
              <button onClick={() => handleIncreaseQuantity(index)}>+</button>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </CartButtons>
          </CartItemStyled>
        ))}
      </CartContainerStyled>
      <TotalContainerStyled>Total: CHF {totalPrice}</TotalContainerStyled>
    </>
  );
}
