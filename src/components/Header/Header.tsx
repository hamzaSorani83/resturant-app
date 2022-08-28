import React from 'react';

import Logo from '../../img/logo.png';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ProfileImg, Nav } from '../';

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <Link to={'/'} className="Link">
        <img src={Logo} alt="logo" className='LogoImg' />
        <p className='LogoTxt'>City</p>
      </Link>
      <Nav />
      <div className="ShoppingBasketParent">
        <MdShoppingBasket className='ShoppingBasketIcon' />
        <div className="ShoppingBasketNumber">
          <p>2</p>
        </div>
      </div>
      <ProfileImg />
    </header>
  )
}

export default Header