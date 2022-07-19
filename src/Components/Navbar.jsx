import React from "react";
import { useState } from "react";
import {BsPerson} from 'react-icons/bs';
import  {BiSearch} from 'react-icons/bi';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


function Navbar() {
  const [nav , setNav] = useState(false);
  const [logo , setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  const handleLogo = () => {
    setLogo(!logo);
  }
  return (
    <div className="flex justify-between items-center px-4 h-20 absolute text-white z-10 w-full">
      
      <div >
        <h1 onClick={handleNav}   className={ logo ? "hidden": "block"} >BEACHES.</h1>
      </div>
      <ul className=" hidden md:flex">
      
        <li>Home</li>
        <li>Destinatins</li>
        <li>travel</li>
        <li>veiw</li>
        <li>Books</li>
        </ul>
      <div className="hidden md:flex ">
        <BsPerson size={20} className="mr-2" />
        <BiSearch size={20}/>
        </div> 
      <div className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} onClick={handleNav}/> : <HiOutlineMenuAlt4 size={20} onClick={handleNav}/>}
         
       
      </div>
      <div  className={nav ? " absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col":"absolute left-[-100%]"}>
        <ul>
        <h1>BEACHES.</h1>
        <li className="border-b">Home</li>
        <li className="border-b">Destinatins</li>
        <li className="border-b">travel</li>
        <li className="border-b">veiw</li>
        <li className="border-b">Books</li>
        <div className="flex flex-col">
        <button className="my-6">Search</button>
        <button>Account</button>
      </div>
      <div className="flex justify-between my-6">
        <FaFacebook  className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaPinterest className="icon" />
        <FaYoutube className="icon" />
      </div>
        </ul>
      </div>
{/*       
      
      <h1>BEACHES.</h1>
      
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>Destinatins</li>
        <li>travel</li>
        <li>veiw</li>
        <li>Books</li>
       

      
     
      <div>
        <FaFacebook  className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaPinterest className="icon" />
        <FaYoutube className="icon" />
      </div>
      </ul> */}
      {/* </div> */}
      </div>

    
    
    

  );
}

export default Navbar;



