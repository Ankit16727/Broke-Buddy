import { Alert} from "react-bootstrap";
import Link from 'next/link';
import logo from '../public/bank.png';
import Image from 'next/image';
import { useState } from 'react';
import { registerUser } from "@/lib/authenticate";
import { useRouter } from "next/router";
export default function Register() {
    const router = useRouter();
    const [warning, setWarning] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
       
        console.log("done")
        try{
          await registerUser(firstName,lastName,email, password, password2);
          router.push("/login");
        }catch(err){
         setWarning(err.message);
        }
    
      }
  return (
    
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-[#BEBFBF] w-80 md:w-96">
        <div className="p-10">

        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <p className="font-jockeyOne text-3xl text-center">BrokeBuddy</p>
          </div>
          <div className="mb-3">
            <input
              placeholder="First Name"
              value={firstName}
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
              onChange={e => setFirstName(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Last Name"
              value={lastName}
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
              onChange={e => setLastName(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <input
            value={email}
              placeholder="Mobile Number or Email"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <input
            value={password}
              placeholder="Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <div className="mb-3">
            <input
            value={password2}
              placeholder="Re-enter Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
              onChange={e => setPassword2(e.target.value)} 
            />
          </div>
          
          <div className="flex justify-center mb-9">
            <div className="mr-1">
              <Image className="w-7 object-contain" src={logo} alt="<Member Photo>"></Image>
            </div>
            <div>
              <Link className="text-[#404040] text-sm underline font-inter" href="/">
                Link Bank Account
              </Link>
            </div>
          </div>

          {warning && <>
          <br />
          <Alert variant='danger'>
            {warning}
          </Alert>
        </>}

          <div className="flex justify-center mb-6">
            <button type="submit" className="bg-black text-white rounded-md md:text-lg px-4 py-0.5">
              Sign Up
            </button>
          </div>
          </form>
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