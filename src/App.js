import React from "react";
import Destination from "./Components/Destination";
//import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Select from "./Components/Select";




function App() {

  return (
  <div>
  <Navbar />
  <Hero /> 
  <Destination />
  <Search/>
  <Select />
  </div>
    
    );
}

export default App;
