import React from "react";
import "./Home.css";

import imgSrc from "./logo.png";
import "./BookingPage.js"
import "./BookingPage.css"
import { Link } from "react-router-dom";
import "./Chome.js";
import "./Chome.css"
import "./Register.js"
import "./Review.js"
import "./Profile.js"



function Header(){
    return(
       
    <div className="txt">
        <a href="/"><img src={imgSrc}/></a>
      <ul type="none" className="nav_b">
    <div className="dropdown">
        <li className="dropdownbtn"><a href="">My function</a></li>
        <div className="dropdowncontent">
        <li><a href="/">Home</a></li>
        <li><a href="/add">Add</a></li>
        <li><a href="/display">Display</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>
       
        </div>
        </div>
        <li><a href="/">Home</a></li>
        <div className="customer-btn">
            <Link to="/Chome">Customer</Link></div>
        <li><a href="/add">Supplier</a></li>
        <li><a href="">Staff</a></li>
        <li><a href="/">Inventory</a></li>
        <li><a href="/">Finance</a></li>
        <li><a href="">Services</a></li>
        <li>
        
        </li>
        
        <li>
            <div class="book-btn bg-red-500 hover:bg-red-600 text-black hover:text-black rounded-full text-center py-3 px-6">
                <a href="/booking" class="text-whitesmoke">Book Now</a>
            </div>
        </li>

        
    </ul>
    

</div>

    )
}

export default Header;
