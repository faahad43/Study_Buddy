import React, { useState } from 'react';
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import useSignup from '../hooks/useSignup';

const Registration = () => {
  const [input,setInput]= useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading,signup} = useSignup();

  const handleCheckboxChange = (gender)=>{
    setInput({...input,gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
    console.log(input);
  }

  return (
    <div className='text-text h-[100vh] flex justify-center items-center bg-cover'>
      <div className="bg-slate8 border border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl font-bold text-center mb-8">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" "  value={input.firstname} onChange={(e)=>setInput({...input,firstname:e.target.value})} />
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
            <BiUser className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" "  value={input.lastname} onChange={(e)=>setInput({...input,lastname:e.target.value})} />
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
            <BiUser className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" " value={input.username} onChange={(e)=>setInput({...input,username:e.target.value})} />
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            <BiUser className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <input type="email" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" " value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} />
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            <BiEnvelope className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <input type="password" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" " value={input.password} onChange={(e)=>setInput({...input, password:e.target.value})}/>
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <input type="password" className="block w-72 py-2.5 px-0 text-sm text-gray9 bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer" placeholder=" " value={input.confirmPassword} onChange={(e)=>setInput({...input,confirmPassword:e.target.value})} />
            <label className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4 text-slate4'/>
          </div>
          <div className="relative my-4">
            <label className="text-sm text-text">Gender:</label>
            <div className="flex items-center mt-2">
              <input type="radio" id="male" name="gender" value="male" checked={input.gender=== "male"} onChange={(e)=>handleCheckboxChange('male')} className="mr-2"/>
              <label htmlFor="male" className="mr-4 text-sm text-text">Male</label>
              <input type="radio" id="female" name="gender" value="female" checked={input.gender=== "female"} onChange={(e)=>handleCheckboxChange('female')} className="mr-2"/>
              <label htmlFor="female" className="text-sm text-text">Female</label>
            </div>
          </div>
          <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-text text-emerald8 hover:bg-emerald6 hover:text-text py-2 transition-colors duration-300" type="submit" disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : 'Register'}
            </button>
          <div className='mt-2 items-center'>
            <div className="my-4">
              <span>Already Registered? <span className="text-blue5"> <Link to='/Login'>Login</Link></span></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
