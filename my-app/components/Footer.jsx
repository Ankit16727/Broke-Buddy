import Image from 'next/image';
import { useState, useEffect } from 'react';

import insta_logo from '../public/instagram_logo.png';
import fb_logo from '../public/facebook_logo.png';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <div className="font-inter flex flex-col items-center">
        <div className="logo flex mt-2 space-x-4">
          <Link className="" href="https://www.instagram.com/">
            <Image className="size-5 object-contain" src={insta_logo} alt="Logo" />
          </Link>
          <Link className="" href="https://www.instagram.com/">
            <Image className="size-5 object-contain" src={fb_logo} alt="Logo" />
          </Link>
        </div>
        <div className="grid grid-cols-5 text-sm items-center mt-2 justify-center">
          <div className=" col-span-2 flex justify-end">
            <span className="">Privacy Policy</span>
          </div>
          <div className=" col-span-1 flex justify-center">
            <span id="" className="">
              {' '}
              |{' '}
            </span>
          </div>
          <div className=" col-span-2 flex justify-start">
            <span className="">Terms of Service</span>
          </div>
        </div>
        <div className=" flex items-center mt-1">
          <span className="font-inter text-xs font-light">
            Copyright © 2024 Broke Buddy Inc. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}