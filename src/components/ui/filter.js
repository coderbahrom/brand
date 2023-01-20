import React from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../store/filterSlice';
import X from '../../assets/icons/x.svg';
function Filter({ item }) {
  const dispatch = useDispatch();
  const removeHandler = (a) => {
    dispatch(filterActions.itemDeleted(a));
  };
  return (
    <div className=' flex flex-row w-[115px] h-[32px] rounded-md border-solid border-2 border-[#0D6EFD] justify-between items-center px-[10px]'>
      <p className='not-italic font-semibold leading-[19px] text-[16px] text-[#505050]  '>
        {item?.title}
      </p>
      <img
        onClick={() => removeHandler(item)}
        className='cursor-pointer'
        src={X}
        alt='remote'
      />
    </div>
  );
}

export default Filter;
