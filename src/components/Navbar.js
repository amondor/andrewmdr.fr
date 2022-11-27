import React from "react"
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import  Logo  from "../images/logo-andrewmondor.png";
export default function Navbar(){
const [showLinks, setShowLinks] = useState(false);
const handleShowLinks = () =>{
  setShowLinks(!showLinks)
  console.log(showLinks)
}
return <div className="flex items-center  justify-center">
  <nav className=" flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 pb-16 content-center z-10 text-xl  ">
    <div className="flex items-center">
    <ul className="font-montserrat items-center hidden md:flex md:text-xl gap-8">
      
      
      <a href="/">
      Home
      </a>
     
     
      <a href="https://www.linkedin.com/in/andrew-mondor/">
      About
      </a>
      
      <a href="https://www.malt.fr/profile/andrewmondor">
      Projects
      </a>
     
      <a href="https://github.com/amondor">
      Code 
      </a>
      
    </ul>
    </div>
    {/* <ul className="font-montserrat items-center hidden md:flex md:text-xl">
      <li className="mx-3 ">
        {/* <a className="growing-underline" href="howitworks" >
         Skills
        </a> }
      </li>
      <li className="growing-underline mx-3 ">
        <a href="https://github.com/amondor" target="blank">Code</a>
      </li>
      {/* <li className="growing-underline mx-3">
        <a href="pricing">Code</a>
      </li> }
    </ul>  */}
    <div className="font-montserrat hidden md:block">
   <ul className="items-center hidden md:flex">
   
    <li className="mx-3 ">
      <a href="https://www.malt.fr/profile/andrewmondor" target="blank">
     <FaBriefcase/>
      </a>
    </li>
   
    
   </ul>    
    </div>

    <div id="mobileNav" className={` ${showLinks ? "show-nav": "hidden"} px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down `}>
   
    <div id="showMenu" className="flex justify-end" onClick={handleShowLinks}>
      <FaHamburger />
    </div>
    <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
     
      <li className="my-6">
      <a href="https://github.com/amondor">Code</a>
      </li>
      <li className="my-6">
      <a href="https://www.malt.fr/profile/andrewmondor">Hire me</a>
      </li>
     
    </ul>
  </div> 
  <div id="showMenu" className="md:hidden " onClick={handleShowLinks}>
      <FaHamburger />
    </div>
    
 </nav>
 </div>
 } 
 