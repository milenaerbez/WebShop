import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Cart() {
    const cart = useSelector(state => state.handleCart);
    const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">{item.name}</h5>
              <small className="text-muted">Quantity: {item.qty}</small>
            </div>
            <span className="badge bg-dark ms-auto ms-2">${item.price * item.qty}</span>
            <button className="btn btn-outline-dark ms-2" onClick={() => handleRemove(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart