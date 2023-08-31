import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ item }) {
  const  [{ basket }, dispatch] = useStateValue();
  const wholeRating = Math.floor(item.rating.rate);
  const hasHalfStar = item.rating.rate - wholeRating >= 0.5;

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: item.id,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: 'INCREMENT_ITEM_QUANTITY',
      id: item.id,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: 'DECREMENT_ITEM_QUANTITY',
      id: item.id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img src={item.image} alt='product' className='checkoutProduct_image' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{item.title}</p>
        <p className='checkoutProduct_price'>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(wholeRating).fill().map((_, index) => (
            <StarIcon key={index} color='primary' />
          ))}
          {hasHalfStar && <StarHalfIcon color='primary' />}
        </div>
        <div className='quantity_controls'>
          <button onClick={decreaseQuantity}>-</button>
          <p>Quantity: {item.quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={removeFromBasket} className="remove_from_basket">
  Remove from Basket
</button>

      </div>
    </div>
  );
}

export default CheckoutProduct;
