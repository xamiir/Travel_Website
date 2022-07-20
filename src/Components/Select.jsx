import React from "react";
import bosasa from "../images/bosasa.jpg";
import bosasa1 from "../images/bosasa1.jpg";
import mgd from "../images/mgd.jpg";
import maldives from "../images/maldives.jpg";
import maldives1 from "../images/maldives1.jpg";
import SelectCard from "./SelectCard";




const Select = ()=>{
    return(
        <div className=" max-w-[1240] mx-auto  py-16 px-4 grid sm:gird-cols-2 lg:grid-cols-3 gap-2 ">
         <SelectCard bg={bosasa} text='Barbara'  />
         <SelectCard bg={bosasa1} text='Bangkok'  />
         <SelectCard bg={mgd} text='keywest'  />
         <SelectCard bg={maldives} text='Bosaso'  />
         <SelectCard bg={maldives1} text='Phuket'  />
         <SelectCard bg={mgd} text='mogadishu'  />
            </div>
    )
}
export default Select;