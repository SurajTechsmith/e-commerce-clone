import React from 'react'
import logo from '../images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{basket,user}] = useStateValue();
 const login=()=>{
  if(user){
    auth.signOut();
  }
 }
  return (
    <nav className='header'>
    <Link to="/">
    <img src={logo} alt='logo_img' className='logo' />
    
    </Link>

  <div className='header_search'
>
  <input type='text' className='header_searchInput'></input>

<SearchIcon className='header_searchIcon' />
</div>  
<div className='navHeader'>
<Link className='header_link' to={!user && "/Login"}>
<div className='header_option' onClick={login}>
<span className='headerOption_lineOne'>Hello {user?.email}</span>
  <span className='headerOption_lineTwo'>{user?'Sign Out': 'Sign In'}</span>
</div>
</Link>

<Link className='header_link'>
<div className='header_option'>
<span className='headerOption_lineOne'>Return</span>
  <span className='headerOption_lineTwo'>& Order</span>
</div>  
</Link>


<Link className='header_link'>
<div className='header_option'>
<span className='headerOption_lineOne'>Your</span>
  <span className='headerOption_lineTwo'>Prime</span>
</div>
  <div className='navbasket'> 

  </div>
</Link>
<Link className='basketlink' to='/checkout'>
  <div className='basket'>

  <ShoppingBasketIcon   />
<span className='basketcount'>{basket.length}</span>

  </div>
</Link>

</div>
    </nav>
  )
}

export default Header;
