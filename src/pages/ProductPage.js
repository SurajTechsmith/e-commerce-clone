import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Header from './Header';
import { toast } from 'react-toastify';
import './ProductPage.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ProductPage = () => {
    
  const  [{ }, dispatch] = useStateValue();
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        setProductData(product);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [productId]);
  
  const addToBasket = () => {

  
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          rating: productData.rating,
          quantity: 1,
        },
      });
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
      }, 1500); 
  
  };


  if (!productData) {
    return <div>Loading...</div>;
  }


  return (
    <React.Fragment>
    <Header />
    <div className="product-page">
      <div className="product-details">
        <div className="product-card">
          <div className="product-image">
            <img src={productData.image} alt={productData.title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{productData.title}</h1>
            <p className="product-description">{productData.description}</p>
            <p className="product-category">Category: {productData.category}</p>
            <p className="product-price">Price: ${productData.price}</p>
            <p className="product-rating">Rating: {productData.rating.rate}</p>
            <button className="add-to-cart-button" onClick={addToBasket}>
                {isAdded ? (
                  <CheckCircleIcon className="check-circle-icon" />
                ) : (
                  'Add to Cart'
                )}
              </button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
};

export default ProductPage;
