import React from "react";
import Navbar from "./Navbar.jsx";
import PFP from '../images/my-pfp.png';

function HeroSection() {
  return (
    <div>

      <Navbar/>
      
      {/* Main Content */}


      <section className="lg:flex md:px-12 xs:px-4 justify-center items-center py-24">
      <div className="heading text-6xl text-darkblue space-y-3">
        <h2 className="font-FontA font-semibold xs:text-center md:text-left">
          <span className="font-FontC font-medium text-4xl">Hi,<br /></span> I am <span className="text-liteblue underline">Zaid</span> Hussain
        </h2>
        <p className="font-FontC text-lg text-gray opacity-80 font-medium xs:text-center md:text-left">
          A UI/UX Designer & Frontend Developer. Passionate to become a MERN
          Stack Developer. Learning JavaScript, React JS & Next JS.
        </p>

        <div className="xs:text-center md:text-left">
        <button className="w-40 bg-liteblue text-lg text-[#fff] font-FontB font-medium py-2 rounded transform hover:scale-105 transition-transform duration-300">Hire Now</button>
        </div>


      </div>

      <div className="lg:pt-0 pt-16 items-center flex md:justify-end xs:justify-center ">
        <img src={PFP} alt="My Profile Picture" className="w-3/4 shadow-2xl rounded-full transform hover:scale-105 transition-transform duration-300" />
      </div>
    </section>













    </div>
  );
}

export default HeroSection;
