import React, { useEffect, useState } from 'react';
import tick from '../assets/icons/tick.svg';
import { useParams } from 'react-router-dom';
import save from '../assets/icons/save.svg';
import dot from '../assets/icons/Dot.svg';
import message from '../assets/icons/message.svg';
import sold from '../assets/icons/sold.svg';
import line from '../assets/icons/line7.svg';
import { DUMMY_PRODUCTS } from '../data/data';
import Discount from '../components/ui/Discount';
function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  useEffect(() => {
    setProduct(DUMMY_PRODUCTS.filter((p) => p.id === id));
  }, []);
  const [imgs, setImgs] = useState([]);
  const chooseImg = (item) => {
    console.log(item);
    setImgs(item);
  };
  const title =
    'not-italic leading-[19px] text-[16px] text-[#8B96A5] font-normal flex-1';
  const values =
    'not-italic leading-[19px] text-[16px] text-[#505050] font-normal flex-initial';
  return (
    <div className='  pt-[20px] pl-[126px] pr-[130px] h-full  mt-[100px]'>
      <div className='flex flex-row justify-between gap-4 bg-[#FFFFFF] pr-[31px] pt-[17px] pb-[40px] lg:flex-wrap items-center pl-[40px] '>
        <div className='w-1/3 box-border pl-[19px] lg:w-2/3 '>
          <img
            className='w-[345px] h-[345px] border-2 border-solid border-[#E3E8EE] rounded-md lg:w-[445px] lg:h-[305px]'
            src={imgs.length !== 0 ? imgs : product[0]?.images[0]}
            alt='assalom'
          />
          <div className='flex gap-x-[9px] p-1 border-1 border-b-slate-500 '>
            {product[0]?.images?.map((item, index) => {
              return (
                <img
                  onClick={() => chooseImg(item)}
                  className='w-[49px] h-[49px] border-2 border-solid border-[#E3E8EE] rounded-md cursor-pointer ms:w-[30px] ms:h-[30px]'
                  src={item}
                  alt='assalom'
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className='w-2/3'>
          <div className='flex flex-row justify-between items-center '>
            <span className='flex gap-x-2 items-center '>
              <img src={tick} alt='tick' />
              <p className='not-italic font-normal leading-[24px] text-[16px] text-[#00B517]'>
                In stock
              </p>
            </span>
            <span className='flex gap-x-2 items-center '>
              <img src={save} alt='save' />
              <p className='not-italic font-normal leading-[24px] text-[16px] text-[#0D6EFD] '>
                Save for later
              </p>
            </span>
          </div>
          <h1 className='not-italic leading-[28px] text-[20px] text-[#1C1C1C] font-semibold'>
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          <div className='flex flex-row itmes-center gap-x-[13px] mt-[39px] ms:flex-wrap'>
            <div className='flex items-center cursor-pointer'>
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
                9.3
              </p>
            </div>
            <img src={dot} alt='dot' />
            <img src={message} alt='dot' />

            <p className='not-italic leading-[19px] text-[16px] text-[#787A80] font-normal'>
              34 reviews
            </p>
            <img src={dot} alt='dot' />
            <img src={sold} alt='dot' />

            <p className='not-italic leading-[19px] text-[16px] text-[#787A80] font-normal'>
              154 sold
            </p>
          </div>
          <div className='h-[72px] bg-[#FFF0DF] mt-[14px]'>
            <div className='flex flex-row pl-[27px] pt-[16px] '>
              <span className='flex flex-col gap-x-[4px] flex-1'>
                <h1 className=' leading-[21px] text-[18px] text-[#FA3434] font-semibold'>
                  $98.00
                </h1>
                <p className='not-italic leading-[16px] text-[13px] text-[#606060] font-normal'>
                  50-100 pcs
                </p>
              </span>
              <div className='flex gap-x-[17px] flex-1'>
                <img src={line} alt='line' />
                <span className='flex flex-col gap-x-[4px]'>
                  <h1 className=' leading-[21px] text-[18px] text-[#FA3434] font-semibold'>
                    $98.00
                  </h1>
                  <p className='not-italic leading-[16px] text-[13px] text-[#606060] font-normal'>
                    50-100 pcs
                  </p>
                </span>
              </div>
              <div className='flex gap-x-[17px] flex-1'>
                <img src={line} alt='line' />
                <span className='flex flex-col gap-x-[4px]'>
                  <h1 className=' leading-[21px] text-[18px] text-[#FA3434] font-semibold'>
                    $98.00
                  </h1>
                  <p className='not-italic leading-[16px] text-[13px] text-[#606060] font-normal'>
                    50-100 pcs
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className='mt-[21px] flex flex-col gap-y-[16px]'>
            <div className='flex flex-row'>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={title}>Price:</li>
              </ul>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={values}>Negotiable</li>
              </ul>
            </div>
            <hr />
            <div className='flex flex-row'>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={title}>Type:</li>
                <li className={title}>Material:</li>
                <li className={title}>Design: </li>
              </ul>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={values}>Plastic material</li>
                <li className={values}>Classic shoes</li>
                <li className={values}>Modern nice</li>
              </ul>
            </div>
            <hr />
            <div className='flex flex-row'>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={title}>Customization: </li>
                <li className={title}>Protection:</li>
                <li className={title}>Warranty: </li>
              </ul>
              <ul className=' flex flex-col flex-1 gap-y-[16px]'>
                <li className={values}>
                  Customized logo and <br /> design custom packages
                </li>
                <li className={values}>Refund Policy</li>
                <li className={values}>2 years full warranty </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Discount />
    </div>
  );
}

export default SingleProduct;
