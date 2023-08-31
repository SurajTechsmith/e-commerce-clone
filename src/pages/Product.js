import React, {useState} from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LaunchIcon from '@mui/icons-material/Launch';
import { useStateValue } from '../StateProvider';
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Product({ data }) {
  const [{ basket }, dispatch] = useStateValue();
  const wholeRating = Math.floor(data.rating.rate);
  const [isAdded, setIsAdded] = useState(false);
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
    toast.success('Added To Cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 800); 
  };

  return (
  
    <div className='product_card'>
<Link to={`/product/${data.id}`} className='launch-icon' alt='product_page_link'>
  <LaunchIcon />
</Link>
  <Link to={`/product/${data.id}`} className='product_card_link'>
      <div className='image_container'>
        <img src={data.image} alt='product_item_image' className='product_img' />
      </div>
      <p className='product_title'>{data.title}</p>
      <div className='rating_container'>
        {Array(wholeRating).fill().map((_, index) => (
          <StarIcon key={index} color='primary' />
        ))}
        {hasHalfStar && <StarHalfIcon color='primary' />}
      </div>
      <p className='product_price'>${data.price}</p>
      </Link>
      <button className="add-to-cart-button" onClick={addToBasket}>
                {isAdded ? (
                  <CheckCircleIcon className="check-circle-icon" />
                ) : (
                  'Add to Cart'
                )}
              </button>
    </div>
  
  );
}

export default Product;
