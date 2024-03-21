import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

export default function BookNowPage() {
  return (
    <div>
      <div className="relative">
        <h1 className="ms-20 my-10 mt-20 text-6xl font-extrabold dark:text-white">Book Now</h1>

        <form>
            <div class="grid grid-cols-1 gap-4">
                <div class="flex mx-10">
                    <label for="firstname" class="block text-sm font-medium text-gray-200">First Name</label>
                    <input type="text" id="firstname" name="firstname" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
                    
                    <label for="lastname" class="block text-sm font-medium text-gray-200">Last Name</label>
                    <input type="text" id="lastname" name="lastname" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
               
                </div>
                
                <div>
                    <label for="address" class="block text-sm font-medium text-gray-200">Address</label>
                    <input type="text" id="address" name="address" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-200">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label for="vehicle-number" class="block text-sm font-medium text-gray-200">Vehicle Number</label>
                    <input type="text" id="vehicle-number" name="vehicle-number" class="mt-1 p-2 block border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label for="vehicle-type" class="block text-sm font-medium text-gray-200">Vehicle Type</label>
                    <select id="vehicle-type" name="vehicle-type" class="mt-1 p-2 block border-gray-300 rounded-md">
                        <option value="car">Car</option>
                        <option value="truck">Truck</option>
                        <option value="motorcycle">Motorcycle</option>
                    </select>
                </div>
                <div>
                    <label for="date" class="block text-sm font-medium text-gray-200">Date</label>
                    <input type="date" id="date" name="date" class="mt-1 p-2 block  border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label for="time" class="block text-sm font-medium text-gray-200">Time</label>
                    <input type="time" id="time" name="time" class="mt-1 p-2 block  border-gray-300 rounded-md"></input>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-200">Services</label>
                    <div class="mt-1 space-y-2">
                        <div class="flex items-center">
                            <input id="service1" name="services" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                            <label for="service1" class="ml-2 block text-sm text-gray-900">Service 1</label>
                        </div>
                        <div class="flex items-center">
                            <input id="service2" name="services" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                            <label for="service2" class="ml-2 block text-sm text-gray-900">Service 2</label>
                        </div>
                        <div class="flex items-center">
                            <input id="service3" name="services" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                            <label for="service3" class="ml-2 block text-sm text-gray-900">Service 3</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <button type="submit" class=" px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">Submit</button>
            </div>
        </form>

        

        </div>
      </div>
  );
}
                                                                                                         