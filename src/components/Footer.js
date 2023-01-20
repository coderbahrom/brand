import React from 'react';
import Logo from './ui/Logo';
import facebook from '../assets/icons/social/fb.svg';
import twitter from '../assets/icons/social/tw.svg';
import linkedIn from '../assets/icons/social/lk.svg';
import instagram from '../assets/icons/social/in.svg';
import youtube from '../assets/icons/social/you.svg';
import app from '../assets/appstore.svg';
import google from '../assets/googlestore.svg';
function Footer() {
  const listClass =
    'not-italic font-normal leading-[24px] text-[16px] text-[#8B96A5] cursor-pointer';
  const titleClass =
    'not-italic font-medium leading-[22px] text-[16px] text-[#1C1C1C]';
  return (
    <div className='flex flex-row flex-wrap px-32 pt-6 pb-6 bg-[#FFFFFF] justify-between  mt-10'>
      <div className='flex flex-col gap-y-[17px]'>
        <Logo />
        <p className='not-italic font-medium leading-[24px] text-[16px] text-[#505050]'>
          Best information about the company <br /> gies here but now lorem
          ipsum is
        </p>
        <div className='flex flex-row gap-x-3 cursor-pointer'>
          <img src={facebook} alt='fb' />
          <img src={twitter} alt='twitter' />
          <img src={linkedIn} alt='linkedIn' />
          <img src={instagram} alt='instagram' />
          <img src={youtube} alt='youtube' />
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className={titleClass}>About</h1>
        <ul className='pt-[10px]'>
          <li className={listClass}>About Us</li>
          <li className={listClass}>Find store</li>
          <li className={listClass}>Categories</li>
          <li className={listClass}>Blogs</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h1 className={titleClass}>Information</h1>
        <ul className='pt-[10px]'>
          <li className={listClass}>Help Center</li>
          <li className={listClass}>Money Refund</li>
          <li className={listClass}>Shipping</li>
          <li className={listClass}>Contact us</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h1 className={titleClass}>For users</h1>
        <ul className='pt-[10px]'>
          <li className={listClass}>Login</li>
          <li className={listClass}>Register</li>
          <li className={listClass}>Settings</li>
          <li className={listClass}>My Orders</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h1 className={titleClass}>Get App</h1>
        <div className='pt-[10px] flex flex-col gap-y-[8px]'>
          <button className='rounded w-[123px] h-[42px] bg-[#000000] flex justify-center items-center'>
            <img src={app} alt='appstore' />
          </button>
          <button className='rounded w-[123px] h-[42px] bg-[#000000] flex justify-center items-center'>
            <img src={google} alt='google' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
