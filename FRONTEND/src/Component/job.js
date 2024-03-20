import React, {useState} from "react";
import axios from "axios";
import './job.css'

function CreateJob() {
    const [jobNumber, setjobNumber] = useState("");
    const [jobDate, setjobDate] = useState("");
    const [address, setvehicleType] = useState(""); // Include the 'address' state
    const [country, setregistrationNo] = useState("");
    const [vehicleMake, setvehiclemake] = useState("");
    const [vehicleModel, setvehicleModel] = useState("");
    const [mileage, setmileage] = useState("");
    const [year, setyear] = useState("");
    const [timeIn, settimeIn] = useState("");
    const [out, setout] = useState("");
    const [name,  setname] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [email, setemail] = useState("");
    const [serviceType, setserviceType] = useState("");


    // function submit(e) {
    //     e.preventDefault();

    //     const newSupplier = {
    //         name,
    //         contact,
    //         address, // Include 'address' in the newSupplier object
    //         country
    //     };

    //     axios.post("http://localhost:8090/supplier/add", newSupplier)
    //         .then(() => {
    //             alert("Supplier Added");
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // }

    // Generate an array of years from 1900 to the current year
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = 1992; year <= currentYear; year++) {
      years.push(year);
    }


  
  return (
    <div className="container">
            <div className="Create_job">
                <h1 className="Heading1">New job</h1>
                <form>
                    <label>Job Number :</label>
                    <input type="text" onChange={(e) => setjobNumber(e.target.value)} />

                    <label>Job Date :</label>
                    <input type="date" onChange={(e) => setjobDate(e.target.value)} />

                    <label>Vehicle Type :</label>
                    <select id="vehicle" onChange={(e) => setvehicleType(e.target.value)}>
                        <option value="">--Choose an option--</option>
                        <option value="car">Car</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                        <option value="Bus">Bus</option>
                        <option value="Bike">Bike</option>

                    </select>

                    <h2 className="Heading2">Vehicle Details</h2>

                    <label>Vehicle Reg. No :</label>
                    <input type="text" onChange={(e) => setregistrationNo(e.target.value)} />   

                    <label>Vehicle Make :</label>
                    <select id="vehiclemake" onChange={(e) => setvehiclemake(e.target.value)}>
                        <option value="">--Choose an option--</option>
                        <option value="toyota">Toyota</option>
                        <option value="BMW">BMW</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Benz">Benz</option>
                        <option value="MG">MG</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mitsubishi">Mitsubishi</option>

                    </select>

                    <label>Vehicle Model :</label>
                    <input type="text" onChange={(e) => setvehicleModel(e.target.value)} />

                    <label>Mileage :</label>
                    <input type="number" onChange={(e) => setmileage(e.target.value)} />

                    <label>Year :</label>
                    <select id="year" onChange={(e) => setyear(e.target.value)}>
                      <option value="">   </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    <label>Time In :</label>
                    <input type="time" onChange={(e) => settimeIn(e.target.value)} />   

                    <label>Date & Time Out :</label>
                    <input type="datetime-local" onChange={(e) => setout(e.target.value)} />   

                    <h2 className="Heading3">Customer Details </h2>

                    <label>Name :</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} />  

                    <label>Contact No. :</label>
                    <input type="tel" onChange={(e) => setcontactNumber(e.target.value)} />  

                    <label>E-mail :</label>
                    <input type="email" onChange={(e) => setemail(e.target.value)} /> 

                    {/* <h3 className="serviceType">Service Type :</h3> 
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} /> 
                    <label>Body wash</label> */}

                    






                    
                </form>
            </div>
        </div>
  );
}

export default CreateJob;
