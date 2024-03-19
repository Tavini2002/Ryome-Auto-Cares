import React from "react";
import "./Home.css";
import "./BookingPage.css";

export default function BookingPage() {
  return (
    <div>
      <div className="book">
        <h1>Reserve A Time</h1>
<div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/submit_form" method="post">
          <label htmlFor="name">Name:</label><br/>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" required/><br/>
          
          <label htmlFor="email">Email:</label><br/>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="email" id="email" name="email" required/><br/>
          
          
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  );
}

