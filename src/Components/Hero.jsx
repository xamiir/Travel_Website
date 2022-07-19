import React from "react";
import beaches from "../images/beaches.png";
import { AiOutlineSearch } from "react-icons/ai";
function Hero() {

  return (
 
    <div className=" h-screen w-full relative">
      <img src={beaches} alt="beach" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full left-0 top-0 bg-gray-900/30 "></div>
      <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center text-center text-white p-4 ">
        <h1>first class travel </h1>
        <h2 className="py-4">Top 1% locations worldwide</h2>
        <form className="flex justify-between items-center text-center max-w[700px] mac-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
          <input type="text" placeholder="Search Destinations" className="bg-transparent w-[300px] sm:w[400px] font[poppins] focus:outline-none " />
          </div>
          <div>
         <button>
            <AiOutlineSearch size={20} className="icon text-white" />
         </button>
          </div>
        </form>
      </div>
 </div>
    
    );
}

export default Hero;
