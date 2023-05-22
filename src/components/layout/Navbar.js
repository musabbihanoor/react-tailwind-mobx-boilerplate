import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsPlayFill } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  //open resposive navbar layout
  const [open, setOpen] = useState(false);

  //changes navbar background color as you scroll down
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setNavbarColor("bg-black/90");
    } else {
      setNavbarColor("bg-transparent");
    }
  };

  return (
    <nav
      className={`${navbarColor} fixed z-10 flex items-center gap-14 p-8 w-full`}
    >
      <h1 className="flex-1 flex items-center text-2xl">
        <BsPlayFill className="text-5xl" />
        Logo
      </h1>

      {/* nav for desktop and tablet size */}
      <div className="md:flex hidden gap-5 text-xl">
        <a href="/">About</a>
        <Link to="/">Contact</Link>
      </div>
      <div className="md:flex hidden flex gap-5 text-xl">
        <button className="underline">Sign up</button>
        <Link to="/" className="py-2 px-5 border-2 border-grey rounded-full">
          Log in
        </Link>
      </div>

      {/* nav for mobile size */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden block text-3xl"
        >
          <RxHamburgerMenu />
        </button>
      )}

      {open && (
        <div className="md:hidden flex gap-5 text-xl flex-col items-center justify-center fixed h-screen w-full bg-black/90 top-0 left-0 z-30">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-10 right-10 text-3xl"
          >
            <RxCross1 />
          </button>

          <a href="/">About</a>
          <Link onClick={() => setOpen(false)} to="/contact">
            Contact
          </Link>

          <div className="flex gap-5 mt-5">
            <button className="underline">Sign up</button>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-2 px-5 border-2 border-grey rounded-full"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
