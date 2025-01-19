
import Link from 'next/link';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { authenticateUser } from "@/lib/authenticate";

export default function LogIn() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("It is good")
        try{
          await authenticateUser(user, password);
        }catch(err){
         setWarning(err.message);
        }
    
      }
  return (
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-[#BEBFBF] w-80 md:w-96">
        <div className="p-10">
          <div className="mb-10">
            <p className="font-jockeyOne text-3xl text-center">BrokeBuddy</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                placeholder="Phone number, username, or email"
                value={user}
                className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
                onChange={e => setUser(e.target.value)} 
                />
            </div>
            <div className="mb-6">
                <input
                placeholder="Password"
                value={password}
                type="Password"
                className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
                onChange={e => setPassword(e.target.value)} 
                />
            </div>

            {warning && <>
                <br />
                <Alert variant='danger'>
                    {warning}
                </Alert>
            </>}

            <div className="flex justify-center mb-5">
                <button type="submit" className="bg-black text-white rounded-md md:text-lg px-4 py-0.5">
                Login
                </button>
            </div>
          </form>
          <div className="flex justify-center items-center mb-4">
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
            <p className="inline-block w-[20%] text-center font-inter text-[#404040] text-sm md:text-md">
              OR
            </p>
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
          </div>
          
          <div className="flex justify-center mb-7">
            <p className="mr-1">Don&apos;t have an account? </p>
            <Link href="/register" className="font-bold text-sm underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}