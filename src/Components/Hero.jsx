import React from "react";
import image from "..assets/images.png";
function Hero() {

  return (
  <div className="w-full h-full relative">
    <image className="absolute w-full h-full object-cover" src={image} />
    
  </div>
    
    );
}

export default Hero;
