// Subtotal.js
import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>${getBasketTotal(basket)}</strong>
      </p>
      <div className="subtotal_gift">
        <input type="checkbox" id="giftCheckbox" />
        <label htmlFor="giftCheckbox">This order contains a gift</label>
      </div>
      <div className="subtotal_button">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
