import React from 'react';
import Brands from './Brands';
import Catigories from './Catigories';
import Features from './Features';
function Sidebar() {
  return (
    <div className='flex flex-col gap-y-2 '>
      <Catigories />
      <hr className='w-[240px]' />
      <Brands />
      <hr className='w-[240px]' />
      <Features />
    </div>
  );
}

export default Sidebar;
