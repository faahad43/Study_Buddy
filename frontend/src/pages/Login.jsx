import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import './loginRegistration.css'

const Login = () => {
  return (
    <div className='text-text h-[100vh] flex justify-center items-center bg-cover'>
      <div className="bg-slate8 border border-slate6 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl text-text font-bold text-center mb-6">Login</h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="text"
              className="block w-72 py-2.5 px-0 text-sm text-text bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Username
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-2.5 px-0 text-sm text-text bg-transparent border-0 border-b-2 border-gray3 appearance-none dark:text-text dark:border-gray6 dark:focus:border-blue5 focus:outline-none focus:ring-0 focus:text-text focus:border-blue6 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue6 peer-focus:dark:text-blue5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-blue5">
              Forgot Password?
            </Link>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-text text-emerald8 hover:bg-emerald6 hover:text-text py-2 transition-colors duration-300"
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?{" "}
              <Link className="text-blue5" to="/Registration">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
