import React from "react";
import "./Home.css";
import "./BookingPage.js"
import "./BookingPage.css"

export default function BookingPage(){
    return(
      <div className="book">
      <h1>Reserve A Time</h1>
      <div className="form-area bg-gray-200"  id="formbg">
         <form action="https://formbold.com/s/FORM_ID" method="POST" >
               
         <div class="-mx-3 flex flex-wrap">

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]"> First Name </label>
               <input type="text" name="fName" id="fName" required placeholder="First Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="lName" class="mb-3 block text-base font-medium text-[#07074D]">Last Name </label>
               <input type="text" name="lName" id="lName" required placeholder="Last Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>
         </div>

         <div class="-mx-3 flex flex-wrap">

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="tele" class="mb-3 block text-base font-medium text-[#07074D]"> Telephone </label>
               <input type="text" name="tele" id="tele" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="07XXXXXXXX" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">Email </label>
               <input type="email" name="email" id="email" placeholder="abc@gmail.com" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>
         </div>

                    
         <div class="-mx-3 flex flex-wrap">
           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
                 <label for="vType" class="mb-3 block text-base font-medium text-[#07074D]">Vehicle Type</label>
                     <form class="max-w-sm mx-auto">
                       <select id="vType" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                         <option selected value="car">Car</option>
                         <option value="cab">Cab/Jeep/SUV</option>
                         <option value="minivan">Mini Van</option>
                         <option value="van">Van/Mini Lorry</option>
                       </select>
                   </form>
             </div>
           </div>

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="vNum" class="mb-3 block text-base font-medium text-[#07074D]">Vehicle Number </label>
               <input type="text" name="vNum" id="vNum" placeholder="AB - XXXX" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>
         </div>

        
         <div class="-mx-3 flex flex-wrap">
           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">Date</label>
             <input type="date" name="date" id="date" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>         
      </div>
           </div>

           <div class="w-full px-3 sm:w-1/2">
             <div class="mb-5">
               <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">Time</label>
               <input type="time" name="time" id="time" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
             </div>
           </div>
         </div>

         <div class="mb-5">
           <label class="mb-3 block text-base font-medium text-[#07074D]">Services</label>  
           <div class="flex items-center grid">
                     <div class="flex items-center mr-5 ">         
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Body Wash</label>
                       </div>   
                       
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Interior Clean</label>
                       </div>               
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engine Wash</label>
                       </div>
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Under Wash</label>
                       </div>
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wax</label>
                       </div>
                 </div>

                 <div class="flex items-center grid">
                     <div class="flex items-center mr-5">         
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Oil Change</label>
                       </div>   
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Interior Cleaning</label>
                       </div>               
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engine Wash</label>
                       </div>
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Under Wash</label>
                       </div>
                       <div class="flex items-center mr-5">
                           <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                           <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                       </div>
                 </div>
         </div>
         <div>
           <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Submit</button>
         </div>
       </form>
     </div>
</div>
             


        
  );
}

