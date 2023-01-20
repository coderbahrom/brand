import React, { useState } from 'react';
import Vector from '../../assets/icons/Vector.svg';
function Catigories() {
  const [coll, setColl] = useState(false);
  const collapsed = 'hidden overflow-hidden';
  const expand = 'block overflow-hidden ';
  const data = [
    { title: 'Mobile accessory', checked: false },
    { title: 'Electronics', checked: false },
    { title: 'Smartphones ', checked: false },
    { title: 'Modern tech', checked: false },
  ];

  return (
    <div className='flex flex-col w-[240px] '>
      <div
        className='flex cursor-pointer justify-between'
        onClick={() => setColl((prev) => !prev)}
      >
        <h1 className='not-italic font-semibold leading-[19px] text-[16px] text-[#1C1C1C] peer'>
          Category
        </h1>
        <img
          className={coll ? 'rotate-0' : ' rotate-180 '}
          src={Vector}
          alt='vector'
        />
      </div>

      <div className={coll ? expand : collapsed}>
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className='  flex flex-row gap-x-2 items-center not-italic font-normal leading-[19.36px] text-[16px] text-[#505050] pt-[17px] cursor-pointer'
              >
                {item.checked && <input type='checkbox' />} {item.title}
              </li>
            );
          })}
        </ul>
        <p className='not-italic font-normal leading-[19.36px] text-[16px] text-[#0D6EFD] pt-[17px] cursor-pointer'>
          See all
        </p>
      </div>
    </div>
  );
}

export default Catigories;
