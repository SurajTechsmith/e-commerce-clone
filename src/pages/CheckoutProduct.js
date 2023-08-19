import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';


function CheckoutProduct({ item }) {
    const [{basket}, dispatch] = useStateValue();
    const wholeRating = Math.floor(item.rating.rate);
    const hasHalfStar = item.rating.rate - wholeRating >= 0.5;
    const removeFromBasket = () => {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
            id: item.id, 

                });
      };
      
  return (
    
    <div className='checkoutProduct'>
      <img src={item.image} alt='product' className='checkoutProduct_image' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{item.title}</p>
        <p className='checkoutPr
        oduct_price'>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
        {Array(wholeRating).fill().map((_, index) => (
          <StarIcon key={index} color="primary" />
        ))}
        {hasHalfStar && <StarHalfIcon color="primary" />}
    
        </div>
        <div className='removeFrom_basket'>
        <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
     
      </div>
    </div>
  );
}

export default CheckoutProduct;
