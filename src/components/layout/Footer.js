import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-20 flex gap-10 items-center bg-bg_secondary w-full py-5 sm:px-16 px-6">
      <div className="flex-1">
        <h1 className="flex items-center text-2xl font-bold">
          <BsPlayFill className="text-red text-5xl" />
          Logo
        </h1>
        <p className="text-xs ml-2">All rights reserved</p>
      </div>

      <div className="sm:flex hidden flex-col gap-3 text-sm">
        <a href="/">About</a>
        <Link to="/">Contact</Link>
      </div>

      <div className="flex gap-3">
        <a href="/">
          <FaFacebookF />
        </a>
        <a href="/">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;