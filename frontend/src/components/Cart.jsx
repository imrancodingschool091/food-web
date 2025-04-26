import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/product/productSlice";
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    return acc + (isNaN(price) ? 0 : price * (item.quantity || 1));
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img
                  src={item.image || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{parseFloat(item.price).toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => dispatch(decrementQuantity(item._id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item._id))}>+</button>
                  </div>
                  <p className="item-total">Total: ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Total: ₹{totalPrice.toFixed(2)}</h3>
        
            <Link to={'/Checkout'} className="checkout-btn">Proceed to Checkout</Link>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
