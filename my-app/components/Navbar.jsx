import Image from 'next/image';
import { useState, useEffect } from 'react';

import logo from '../public/BB_logo.png';
import Link from 'next/link';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is typically 768px
    };

    // Set initial value
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {
        <nav className="md:flex items-center border-b-2 border-black-300 bg-white">
          <div className="flex justify-between mx-8 my-4">
            <Link href="/">
              <Image className="size-10 object-contain" src={logo} alt="Logo" />
            </Link>
            <button
              onClick={handleClick}
              type="button"
              className={`md:hidden w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
            >
              <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-45' : 'rotate-0'}`}
              />
              <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'}`}
              />
              <div
                className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}`}
              />
            </button>
          </div>
          {((isOpen && isMobile) || !isMobile) && (
            <div className="fixed md:flex md:items-center md:relative w-full">
              <div className="bg-white md:grow ">
                <ul className=" flex flex-col md:flex-row md: justify-center items-center ">
                  <li className=" ">
                    <Link href="/" className="home font-semibold  mx-8">
                      {' '}
                      Home{' '}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="about font-semibold mx-8">
                      {' '}
                      About{' '}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="contact font-semibold mx-8 ">
                      {' '}
                      Contact{' '}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" bg-white flex md:flex-none justify-center">
                <Link
                  href="/login"
                  className="login_btn rounded-lg mx-8 my-4 px-4 py-1 text-white font-semibold bg-black "
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>
      }
    </>
  );
}