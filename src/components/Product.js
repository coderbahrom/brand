import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderActions } from '../store/orderSlice';
import like from '../assets/icons/like.svg';
function Product({ item }) {
  const dispatch = useDispatch();
  const addToCard = (a) => {
    dispatch(orderActions.addOrder(a));
  };
  return (
    <div className='w-[295px] h-[405px] bg-[#FFFFFF] flex flex-col items-center   '>
      <Link to={`products/${item.id}`} key={item.id}>
        <img
          className='w-[202px] h-[202px] pl-[33px] pr-[33px] pt-[13px]'
          src={item?.image}
          alt='Iphone red'
        />
      </Link>
      <hr className='w-[295px]' />
      <div className='flex flex-row  p-[20px] items-center'>
        <div className='flex flex-col gap-y-[11px]'>
          <div className='pt-[17px] flex gap-x-1'>
            <h1 className='not-italic font-semibold leading-[22px] text-[18px] text-[#1C1C1C] '>
              {item?.price}
            </h1>
            <h1 className=' line-through not-italic font-normal leading-[19px] text-[16px] text-[#8B96A5] '>
              $1128.00
            </h1>
          </div>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>First star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Second star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Third star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fourth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-300 dark:text-gray-500'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fifth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
              {item?.rate} out of 10
            </p>
          </div>
          <h2 className='not-italic font-normal leading-[24px] text-[16px] text-[#606060] cursor-pointer'>
            {item?.description}
          </h2>
        </div>

        <img
          className='cursor-pointer'
          onClick={() => addToCard(item)}
          src={like}
          alt='liked'
        />
      </div>
    </div>
  );
}

export default Product;
