import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";
//import imgSrc from "./customer.png";
//import imgSrc1 from "./manager.png";
//import imgSrc2 from "./wipe.jpg";

export default function BookingPageCustomerLogin() {
  return (
    <div>
      <div className="relative"></div>
      <h1 className="ms-20 mt-20 m text-6xl font-extrabold dark:text-white">Book Now</h1>
      <img src={imgSrc2} alt="Wipe Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>
    </div>
  );
}
