import React from 'react';

function Discount() {
  return (
    <div className='flex flex-row justify-between items-center px-[30px] pt-[28px] pb-[38px] bg-[#237CFF] rounded mt-7'>
      <div>
        <h1 className='not-italic leading-[32px] text-[24px]   font-semibold text-[#FFFFFF]'>
          Super discount on more than 100 USD
        </h1>
        <p className='not-italic leading-[19px] text-[16px] font-normal text-[#FFFFFF] opacity-[0.7]'>
          Have you ever finally just write dummy info
        </p>
      </div>
      <button className='rounded-md w-[121px] h-[40px] bg-[#FF9017] text-[#FFFFFF] font-medium leading-[19px] text-[16px] text-center '>
        Shop now
      </button>
    </div>
  );
}

export default Discount;
