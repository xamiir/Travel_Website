import React from "react";



const SelectCard = (props) => {
    return (
        <div className="relative">
        <img src={props.bg} alt="bosasa" className="w-full h-full object-cover" />
         <div className="bg-gray-800/30 absolute top-0 left-0 w-ful h-full ">
             <p className="left-4 bottom-4 text-2xl font-bold text-white absolute"> {props.text} </p>

         </div>

     </div>
     
    )
}
export default SelectCard;
