// import React, { useState, useEffect } from "react";
// import "./Res.css";
// import axios from "axios";

// export default function Display(){

//     const [ suppliers, setSuppliers] =useState([]);
  
    // useEffect(()=>{
    //     function getSuppliers() {
    //         //
    //         axios.get("http://localhost:8090/supplier/").then((res) => {
    //             setSuppliers(res.data);
    //         }).catch((err) => {
    //             alert(err.message);
    //         })
    //     }
    //     getSuppliers();
    // },[]);
//--------------------------------------------------------------------------------
//     useEffect(() => {
//         function getSuppliers() {
//             axios.get("http://localhost:8090/supplier/")
//                 .then((res) => {
//                     console.log("Response from server:", res.data);
//                     setSuppliers(res.data);
//                 })
//                 .catch((err) => {
//                     console.error("Error fetching data:", err);
//                     alert(err.message);
//                 });
//         }
    
//         getSuppliers();
//     }, []);
    
//     return(
//         <div>
//             <h1 style={{color:"red"}}>Display all Suppliers</h1>
            
            
//         </div>
//     )
// }
import React, { useState, useEffect } from "react";
import "./Res.css";
import axios from "axios";

export default function Display() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        function getSuppliers() {
            axios.get("http://localhost:8090/supplier/")
                .then((res) => {
                    console.log("Response from server:", res.data); 
                    setSuppliers(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert(err.message);
                });
        }

        getSuppliers();
    }, []);

return (
    <div>
                <h1 style={{ color: "red" }}>Display all Suppliers</h1>
<div className="background-container">
        

        <ul>
            {suppliers.map((supplier) => (
                
                <li style={{fontSize:20}} type="none" key={supplier.id}><label>Name :</label>{" "+supplier.name}<br/><label>Contact :</label>{" "+supplier.contact}<br/><label>Address :</label>{" "+supplier.address}<br/><label>Country :</label>{" "+supplier.country}<pre>{JSON.stringify()}</pre>            
                 <div className="line" style={{color:"white"}}>.</div>
                </li>  //{JSON.stringify(supplier)}
            ))}
        </ul>
       
        </div>
    </div>
);
}

