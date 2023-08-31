import React from 'react'
import Header from './Header'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider'
import Subtotal from './Subtotal';
import './Checkout.css'


function Checkout() {
  const  [{ basket }, dispatch]= useStateValue();
  return (
    <>
<Header />
<div className='checkout'>
        {basket.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
            <p>To add items to basket, click on "Add to Basket" button next to item</p>
          </div>
        ) : (
    <>
    <div className='checkout_ProductList'>
           
           <h2>Your Shpping Basket</h2>
           {basket.map((item) => (
              <CheckoutProduct
                item={item}
              />
            ))}
          </div>
          <Subtotal />
    </>
   
        )}
    
        </div>

    </>
   
  )
}

export default Checkout
