import React from 'react';
import { useDispatch } from 'react-redux';
import { orderActions } from '../store/orderSlice';
function Order({ item }) {
  const dispatch = useDispatch();
  const removeFromCart = (a) => {
    dispatch(orderActions.onDelete(a));
  };
  return (
    <div className='flex justify-between items-center px-[27px] py-[29px] ms:flex-wrap ms:gap-y-3'>
      <div className='flex items-center gap-x-[13.39px] flex-1 lg:flex-wrap lg:gap-y-3'>
        <span className='bg-[#F7F7F7] border border-solid border-[#E0E0E0] rounded-md	'>
          <img
            className='px-[11.66px] py-[14.47px]'
            src={item?.image}
            alt='samples'
          />
        </span>
        <div className='flex flex-col gap-y-2'>
          <h1 className='not-italic leading-[22px] text-[16px] text-[#1C1C1C] font-medium'>
            T-shirts with multiple colors, for men and lady
          </h1>
          <p className='not-italic leading-[24px] text-[16px] text-[#8B96A5] font-normal'>
            Size: medium, Color: blue, Material: Plastic <br /> Seller: Artel
            Market
          </p>
          <div className='flex items-start gap-x-[8px] sm:flex-wrap sm:gap-y-3'>
            <button
              onClick={() => removeFromCart(item)}
              className='w-[95px] h-[30px] border-box bg-[ #FFFFFF]  border border-solid border-[#E3E8EE] rounded-md text-[#FA3434] text-center font-medium leading-[16px] text-[13px] sm:w-[144px] '
            >
              Remove
            </button>
            <button className='w-[144px] h-[30px] border-box bg-[#FFFFFF]  border border-solid border-[#E3E8EE] rounded-md text-[#0D6EFD] text-center font-medium leading-[16px] text-[13px]'>
              Save for later
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-[12px]  flex-initial'>
        <h1 className='not-italic leading-[22px] text-[16px] text-[#1C1C1C] font-medium'>
          $78.99
        </h1>
        <select className='border-box bg-[#FFFFFF]  border border-solid border-[#E3E8EE] rounded-md w-[164px] h-[40px]'>
          <option>Qty: 9</option>
        </select>
      </div>
      <hr />
    </div>
  );
}

export default Order;
