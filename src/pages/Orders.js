import React from 'react';
import Order from '../components/Order';
import Discount from '../components/ui/Discount';
import { useSelector } from 'react-redux';
import vector from '../assets/Vector.svg';
import { Link } from 'react-router-dom';
function Orders() {
  const orderedData = useSelector((state) => state.order.orders);
  console.log(orderedData);
  if (orderedData.length === 0) {
    return (
      <div
        className='px-[130px] mb-5 mt-[150px] '
        style={{
          height: '50vh',
        }}
      >
        <h1>No Orders, Please Order Something</h1>
        <Link to='/'>
          {' '}
          <button className='sm:w-[144px] sm:text-[14px] sm:leading-[16px] my-6 mx-6 flex items-center w-[212px] h-[40px] bg-[#0D6EFD] rounded-md not-italic leading-[19px] text-[16px] text-[#FFFFFF] font-normal text-center'>
            <img className='px-[20px]' src={vector} alt='dd' /> Back to shop
          </button>
        </Link>
        <Discount />
      </div>
    );
  }
  return (
    <div className='px-[130px] mb-5 mt-[120px]  sm:px-[70px] '>
      <h1 className='not-italic leading-[32px] text-[24px] text-[#000000] font-bold'>
        Orders({orderedData.length})
      </h1>
      <div className='rounded-md border border-solid border-[#E3E8EE] bg-[#FFFFFF] mt-[23px]'>
        {orderedData?.map((item, index) => (
          <Order item={item} key={index} />
        ))}
        <hr className='px-[27px] ' />
        <Link to='/'>
          {' '}
          <button className=' sm:w-[144px] sm:text-[14px] sm:leading-[16px] my-6 mx-6 flex items-center w-[212px] h-[40px] bg-[#0D6EFD] rounded-md not-italic leading-[19px] text-[16px] text-[#FFFFFF] font-normal text-center'>
            <img className='px-[20px]' src={vector} alt='dd' /> Back to shop
          </button>
        </Link>
      </div>
      <Discount />
    </div>
  );
}

export default Orders;
