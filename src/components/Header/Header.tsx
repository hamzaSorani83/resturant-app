import React from 'react';

import Logo from '../../img/logo.png';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ProfileImg } from '../';

const Header: React.FC = () => {
  return (
    <header className='Header'>
      <Link to={'/'} className="Link">
        <img src={Logo} alt="logo" className='LogoImg' />
        <p className='LogoTxt'>City</p>
      </Link>
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="Nav">
        <li className='NavItem'> Home </li> 
        <li className='NavItem'> Menu </li>
        <li className='NavItem'> About Us </li>
        <li className='NavItem'> Service </li>
      </motion.ul>
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