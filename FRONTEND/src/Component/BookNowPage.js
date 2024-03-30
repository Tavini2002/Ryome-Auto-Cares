import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

export default function BookNowPage() {
  return (
    <div>
      <div className="relative">
        <h1 className="ms-20 my-10 mt-20 text-6xl font-extrabold dark:text-white">Book Now</h1>

        <form className="w-half bg-gray-100 p-6 ms-60 my-10 mt230 p-4 m-60 border-gray-300 rounded-lg">
            <div class="grid grid-cols-1 gap-4 ">
                <div class="form-group flex mx-10" >
                    <table class="w-full">
                        <tr>
                            <td><label for="firstname" class="block text-sm font-medium text-black my-4">First Name</label></td>
                            <td><input type="text" id="firstname" name="firstname" class="mt-1 p-2 block border-gray-300 rounded-md text-black"></input></td>
                            <td> <label for="lastname" class="block text-sm font-medium text-black my-4">Last Name</label></td>
                            <td> <input type="text" id="lastname" name="lastname" class="mt-1 p-2 block border-gray-300 rounded-md text-black"></input></td>
                        </tr> 
                        <tr>   
                            <td><label for="address" class="block text-sm font-medium text-black my-4">Address</label></td>
                            <td><input type="textarea" id="address" name="address" class="mt-1 p-2 block border-gray-300 rounded-md text-black"></input></td>
                            <td><label for="phone" class="block text-sm font-medium text-black my-4">Phone Number</label></td>
                            <td><input type="tel" id="phone" name="phone" class="mt-1 p-2 block border-gray-300 rounded-md text-black"></input></td>
                        </tr>
                        <tr>
                            <td><label for="email" class="block text-sm font-medium text-black my-4">Email</label></td>
                            <td><input type="email" id="email" name="email" class="mt-1 p-2 block border-gray-300 rounded-md text-black me-10"></input></td>
                        </tr>

                        <br></br>
                        <br></br>

                        <tr>
                            <td><label for="vehicle-number" class="block text-sm font-medium text-black me-5 my-4">Vehicle Number</label></td>
                            <td><input type="text" id="vehicle-number" name="vehicle-number" class="mt-1 p-2 block border-gray-300 rounded-md text-black"></input></td>
                            <td><label for="vehicle-type" class="block text-sm font-medium text-black me-5 my-4">Vehicle Type</label></td> 
                            <td><select id="vehicle-type" name="vehicle-type" class="mt-1 p-2 block border-gray-300 rounded-md text-black">
                                  <option value="car">Car</option>
                                  <option value="truck">Truck</option>
                                  <option value="motorcycle">Motorcycle</option>
                                 </select>
                            </td>
                        </tr>

                        <br></br>
                        <br></br>

                        <tr>
                            <td><label for="date" class="block text-sm font-medium text-black me-5 my-4">Date</label></td>
                            <td><input type="date" id="date" name="date" class="mt-1 p-2 block  border-gray-300 rounded-md text-black"></input></td>

                            <td><label for="time" class="block text-sm font-medium text-black  me-5 my-4">Time</label></td>
                            <td><input type="time" id="time" name="time" class="mt-1 p-2 block  border-gray-300 rounded-md text-black"></input></td>
                        </tr>


                    </table>
                        

                        


                    
                </div>
       

                <div class="form-group">
                    <label class="block text-sm font-medium text-black mx-10">Services</label>
                    <div class="mt-1 space-y-2 flex mx-10 mt-5  ms-10">
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 1</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 2</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 3</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 4</label>
                        </div>    
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 5</label>
                        </div> 
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 6</label>
                        </div>  
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 7</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 8</label>
                        </div>  
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 10</label>
                        </div> 
                    </div>
                    <div class="mt-1 space-y-2 flex mx-10 mt-5  ms-10">
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 1</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 2</label>
                        </div>
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 3</label>
                        </div>  
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 4</label>
                        </div>    
                        <div class="flex items-center me-10">
                            <input id="service" name="services" type="checkbox"></input>
                            <label for="service">Service 5</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Submit</button>
            </div>
        </form>

        

        </div>
      </div>
  );
}
                                                                                                         