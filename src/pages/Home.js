import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Home.css';
import poster from '../images/poster.jpg';
import Product from './Product';
import Prime_logo from '../images/prime.svg';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className='poster_view'>
        <img src={poster} alt='poster' className='poster' />
        <div className='prime_container'>
          <img src={Prime_logo} alt='prime_logo' className='prime_logo' />
          <h4 className='prime_text'>Watch Now</h4>
        </div>
      </div>
<div className='product_list'>
{data.map((e) => {
  return <Product key={e.id} data={e} />;
})}

</div>
    
    </>
  );
}

export default Home;
