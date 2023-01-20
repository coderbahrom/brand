import React from 'react';
import logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';
import heart from '../assets/icons/heart.svg';
import { Link } from 'react-router-dom';
function Navbar({ setSearched }) {
  const searchHandler = (e) => {
    setSearched(e.target.value);
  };
  const orderedData = useSelector((state) => state.order.orders);

  return (
    <div className='relative'>
      <div className='flex flex-row justify-between items-center  px-[131px] pt-6 pb-6 bg-[#FFFFFF] fixed top-0 left-0 right-0 '>
        <div className='flex flex-row items-center '>
          <img
            className='flex-1 md:hidden  w-[150px]  h-[46px] cursor-pointer'
            src={logo}
            alt='logo'
          />
          <div className=' flex  flex-1'>
            <input
              onChange={searchHandler}
              className=' sm:w-[270px] flex-1 rounded w-[421px] h-[40px] box-border border border-solid focus:outline-[#0D6EFD] '
              placeholder=' Search'
            />
            <button className='lg:hidden rounded w-[100px] h-[38px] border-box border-1 bg-gradient-to-r from-[#127FFF] to-[#0067FF] not-italic font-medium leading-[19px] text-[16px] text-[#FFFFFF]'>
              Search
            </button>
          </div>
        </div>
        <div className='flex flex-col sm:pl-[20px] '>
          <img src={heart} alt='Yurak' />
          <div class='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full  dark:border-gray-900 top-1 ml-6 mt-1'>
            {orderedData.length}
          </div>
          <Link to={'/orders'}>
            {' '}
            <h1 className='text-[#8B96A5] text-xs font-normal mt-[11px] cursor-pointer'>
              Orders
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
