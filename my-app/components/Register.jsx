import Link from 'next/link';
import logo from '../public/bank.png';
import Image from 'next/image';
export default function Register() {
  return (
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-[#BEBFBF] w-80 md:w-96">
        <div className="p-10">
          <div className="mb-10">
            <p className="font-jockeyOne text-3xl text-center">BrokeBuddy</p>
          </div>
          <div className="mb-3">
            <input
              placeholder="First Name"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Last Name"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Mobile Number or Email"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>

          <div className="mb-3">
            <input
              placeholder="Re-enter Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          
          <div className="flex justify-center mb-9">
            <div className="mr-1">
              <Image className="w-7 object-contain" src={logo} alt="<Member Photo>"></Image>
            </div>
            <div>
              <button className="text-[#404040] text-sm underline font-inter">
                Link Bank Account
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <button type="submit" className="bg-black text-white rounded-md md:text-lg px-4 py-0.5">
              Sign Up
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <p className="mr-1">Have an account? </p>
            <Link href="/login" className="font-bold text-sm underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}