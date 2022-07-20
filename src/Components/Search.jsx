import React from "react";
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutLineTravelExplore} from 'react-icons/md'
import { MdOutlineTravelExplore } from "react-icons/md";



const Search = () => {
    return(
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16 px-4">
           <div className="lg:col-span-2 flex flex-cols justify-evenly">
            <div>
                <h2>LUXURY INCLUDED ALL VACATION FOR TWO PEOPLE</h2>
                <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col lg:flex-row items-center text-center">
                <button>
                    <RiCustomerService2Fill size={40} className="text-3xl" />
                </button>
                <div>
                       
                        <h3 classNpyame="py-2">LEADIND SURVICE</h3>
                    <p className="py-1">ALL-INCLUCIVE COMPANY FOR  20-YEAR IN-A-ROW</p>
                    </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-center">
                <button>
                   <MdOutlineTravelExplore size={40} className="text-3xl " />
                </button>
                <div>
                        <h3 className="py-2">LEADIND SURVICE</h3>
                    
                        <p className="py-1">ALL-INCLUCIVE COMPANY FOR 20 YEAR IN-A-ROW</p>
                    </div>
            </div>
           </div>
           </div>
           
         
         </div>
           <div >
            <div className="border text-center">
                <p className="py-2">GET ADDITIONAL 10% OFF</p>
                <p className="py-4">12 HOURS LEFT</p>
                <p className="bg-gray-800 text-white py-2 ">BOOK NOW AND SAVE</p>

            </div>
            <form>
                <div>
                    <label>
                        <select className="border border-gray-400 p-2 w-full">
                            <option>Select Destination</option>
                            <option>Bangkok</option>
                            <option>Phuket</option>
                            <option>Key west</option>
                            <option>barbara</option>
                            <option>bosaso</option>
                            </select>
                          </label>
                </div>
                <div>
                    <label>
                        check in
                        <input type="date" className="border border-gray-400 p-2 w-full" />
                    </label>
                </div>
                <div>
                    <label>
                        check out
                        <input type="date" className="border border-gray-400 p-2 w-full" />
                    </label>
                </div>
                <div>
                    <button className="bg-blue-500 text-white p-2 rounded-lg w-full">
                        Rates & Availability
                    </button>
                </div>

            </form>
           </div>
          </div>
            
          
        

    )
}
export default Search;
