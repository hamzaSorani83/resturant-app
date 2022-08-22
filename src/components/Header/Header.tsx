import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-6 px-12'>
      <div className='hidden md:flex w-full h-full bg-red-600'>
      </div>
      
      <div className='flex md:hidden h-full bg-blue-500'>
      </div>
    </div>
  )
}

export default Header