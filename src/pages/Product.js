import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useStateValue } from '../StateProvider';

function Product({ data }) {
  const [{ basket }, dispatch] = useStateValue();
  const wholeRating = Math.floor(data.rating.rate);
  const hasHalfStar = data.rating.rate - wholeRating >= 0.5;

  const addToBasket = () => {
    const existingItemIndex = basket.findIndex(item => item.id === data.id);
  
    if (existingItemIndex !== -1) {
      dispatch({
        type: 'INCREMENT_ITEM_QUANTITY',
        id: data.id,
      });
    } else {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          rating: data.rating,
          quantity: 1, 
        },
      });
    }
  };
  

  return (
    <div className='product_card'>
      <p>{data.title}</p>
      <strong>${data.price}</strong>

      <div>
        {Array(wholeRating).fill().map((_, index) => (
          <StarIcon key={index} color="primary" />
        ))}
        {hasHalfStar && <StarHalfIcon color="primary" />}
      </div>

      <div className='image_container'>
        <img src={data.image} alt='product_item_image' className='product_img' />
      </div>

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
