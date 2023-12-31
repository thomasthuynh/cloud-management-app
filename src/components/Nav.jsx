import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav)
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#support">
              <li>Support</li>
            </a>
            <a href="#platforms">
              <li>Platforms</li>
            </a>
            <a href="#pricing">
              <li>Pricing</li>
            </a>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-6 py-3">Sign Up</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {nav ? <XMarkIcon className="w-8" /> : <Bars3Icon className="w-8" />}
        </div>
      </div>

      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <a href="#home" onClick={handleClose}>
          <li className="border-b-2 border-zinc-300">Home</li>
        </a>
        <a href="#about" onClick={handleClose}>
          <li className="border-b-2 border-zinc-300">About</li>
        </a>
        <a href="#support" onClick={handleClose}>
          <li className="border-b-2 border-zinc-300">Support</li>
        </a>
        <a href="#platforms" onClick={handleClose}>
          <li className="border-b-2 border-zinc-300">Platforms</li>
        </a>
        <a href="#pricing" onClick={handleClose}>
          <li className="border-b-2 border-zinc-300">Pricing</li>
        </a>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
