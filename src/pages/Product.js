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
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
      },
    });
  };

  return (
    <div className='product_card'>
      <img src={data.image} alt='product_item_image' className='product_img' />
      <p className='product_title'>{data.title}</p>
      <div className='rating_container'>
        {Array(wholeRating).fill().map((_, index) => (
          <StarIcon key={index} color='primary' />
        ))}
        {hasHalfStar && <StarHalfIcon color='primary' />}
      </div>
      <p className='product_price'>${data.price}</p>
      <button className='add_to_cart_button' onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
