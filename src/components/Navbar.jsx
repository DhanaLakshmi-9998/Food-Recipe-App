import React, { useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo2 from "../assets/spoon.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <header className="w-full bg-black opacity-90 font-mono fixed z-10">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between " style={{boxShadow:" rgba(200, 200, 200, 0.45) 0px 25px 20px -20px"}}>
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img src={logo2} alt="" className="mr-1 w-8 h-8" />
          <p className="font-bold text-lg text-center">
                        Fresh<span className="text-green-500 text-xl">Food</span>
                    </p>
        </a>
       <div className="flex gap-4 items-center justify-center">
       <ul className="hidden md:flex text-white font-mono text-lg gap-6">
          <li  className="hover:scale-110 hover:text-[#FCA61F]">
            <a href="/">Home</a>
          </li>
          
        </ul>
        {/* Button component */}
        <Link to='/signin'>
        <Button
          title="Sign in"
          containerStyle="hidden font-mono md:block bg-transparent border-[1.8px] border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]
        "
        /></Link>
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
       </div>
      </nav>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } bg-black flex-col w-full px-6 py-10 text-white gap-6 text-[15px] hover:text-[#FCA61F]`}
      >
       
        <a href="/" >Home</a>
        <Link to='/signin'>
        <Button
          title="Sign in"
          containerStyle="font-mono  bg-transparent border-[1.8px] border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]
        "
        /></Link>

      </div>
    </header>
  );
};

export default Navbar;
