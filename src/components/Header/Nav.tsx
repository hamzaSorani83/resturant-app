import React from 'react'
import { motion } from "framer-motion";

interface IProps {
  className ?: string;
}

const Nav: React.FC<IProps> = ({ className }) => {
  return (
    <motion.ul className={[className, "Nav"].join(" ")} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }}>
      <li className='NavItem'> Home </li> 
      <li className='NavItem'> Menu </li>
      <li className='NavItem'> About Us </li>
      <li className='NavItem'> Service </li>
    </motion.ul>
  )
}

export default Nav