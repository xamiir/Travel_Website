import React from "react";
import bosasa from "../images/bosasa.jpg";
import bosasa1 from "../images/bosasa1.jpg";
import mgd from "../images/mgd.jpg";
import maldives from "../images/maldives.jpg";
import maldives1 from "../images/maldives1.jpg";






function Destination() {

    return (
    <div className="max-w[1240px] mx-auto py-16 px-4 text-center ">
        <h1>All Inclusive Resorts</h1>
        <p className="py-4">On The Caribbean's best Beaches</p>
       <div className=" grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
       <img src={bosasa} alt="bosasa" className="w-full h-full object-cover col-span-3 row-span-2" /> 
       <img src={bosasa1} alt="bosasa1" className="w-full h-full object-cover" />
         <img src={mgd} alt="mgd" className="w-full h-full object-cover " />
            <img src={maldives} alt="maldives" className="w-full h-full object-cover" />
            <img src={maldives1} alt="maldives1" className="w-full h-full object-cover " />

       </div>
    </div>
      
      );
  }
  
  export default Destination;
  