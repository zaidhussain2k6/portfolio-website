import React, { useState } from 'react';
import HAM from '../images/ham-menu.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <nav className="mx-auto flex items-center justify-between xs:px-8 md:px-12 py-6">

<div className="font-FontA font-semibold text-2xl">
  Zaid <span className="text-liteblue">UI</span> Dev
  <span className="text-liteblue">.</span>
</div>

<div className="font-FontB font-medium text-darkblue opacity-70 text-base space-x-4 md:flex hidden">
<a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    Home
  </a>
  <a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    About
  </a>
  <a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    Services
  </a>
  <a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    Experience
  </a>
  <a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    Projects
  </a>
  <a href="#" className="navbar-link hover:text-liteblue hover:opacity-100 hover:underline hover:transition-all hover:duration-600">
    Contact
  </a>
</div>

<div className="md:hidden flex ">
  <img src={HAM} alt="" className="cursor-pointer" />
</div>


</nav>

  );
}
export default Navbar;