import React from "react";
import "./Home.css";
import "./BookingPage.js"
import "./BookingPage.css"
import imgSrc from "./customer.png";
import imgSrc1 from "./manager.png";
export default function BookingPage(){
    return(
        <div>
         <h1 class="ms-20 mt-20 m text-6xl font-extrabold dark:text-white">Book Now</h1><br></br>
         <small class="ms-20 text-2xl font-semibold text-gray-500 dark:text-gray-400">Simplifies the process of making reservations by providing</small><br></br>
         <small class="ms-20 text-2xl font-semibold text-gray-500 dark:text-gray-400">a convenient online platform where users can easily </small><br></br>
         <small class="ms-20 text-2xl font-semibold text-gray-500 dark:text-gray-400">select their desired date and time, choose the service, </small><br></br>
         <small class="ms-20 text-2xl font-semibold text-gray-500 dark:text-gray-400"> and often make payment arrangements if necessary.</small>
        <div className="flex ms-20 my-20">
          <figure>
            <img class="rounded-full w-40 h-40 ms-20"  src={imgSrc}></img>
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Customer Login</button></figcaption>
            </figure>
            <figure>
            <img class="rounded-full w-40 h-40 ms-20"  src={imgSrc1}></img>
                <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Manager Login</button></figcaption>
            </figure>
            </div>
            <div>
             
            </div>
        </div>
             


        
  );
}

