import React from 'react';
import logo from '../../assets/logo.svg';
function Logo() {
  return (
    <img
      className='flex-none w-14 h-14 w-[150px]  h-[46px] cursor-pointer'
      src={logo}
      alt='logo'
    />
  );
}

export default Logo;
