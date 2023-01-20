import React from 'react';
import pager from '../../assets/icons/pager.svg';
import pagel from '../../assets/icons/pagel.svg';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex place-content-end'>
      <select className='sm:hidden w-[125px] h-[40px] rounded-md border-[#E3E8EE] cursor-pointer'>
        <option>Show 10</option>
        <option>Show 15</option>
        <option>Show all</option>
      </select>
      <ul className='flex flex-row gap-x-1 text-end pl-[37px]'>
        <div className='flex justify-center items-center bg-[#FFFFFF] w-[44px] h-[40px] cursor-pointer'>
          <img
            src={pager}
            alt='right'
            className='fill-black w-[8px] h-[14px] '
          />
        </div>
        {pageNumbers.map((number, index) => (
          <li
            key={index}
            className='flex justify-center items-center bg-[#FFFFFF] w-[44px] h-[40px] cursor-pointer'
          >
            <p
              onClick={() => paginate(number)}

              // className='bg-[#cfe4f1]'
            >
              {number}
            </p>
          </li>
        ))}
        <div className='flex justify-center items-center bg-[#FFFFFF] w-[44px] h-[40px] cursor-pointer'>
          <img src={pagel} alt='right' />
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
