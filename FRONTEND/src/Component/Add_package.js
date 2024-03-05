import React, { useState } from "react";
import "./Add_package.css";
import "./Res.css";
import axios from "axios";

function AddPackage() {
  // add package form
  const [pid, setPid] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault();

    const newPackage = {
      pid,
      name,
      description,
      unitPrice: parseFloat(unitPrice), // Ensure unitPrice is correctly formatted as a number
      category,
    };

    axios
      .post("http://localhost:8090/svc-packages/add", newPackage)
      .then(() => {
        alert("Package Added");
      })
      .catch((err) => {
        alert(err.message); //error message
      });
  }

  return (
    <div className="container">
      <div className="Add">
        <h1 className="text-3xl text-center bg-red-300">Add Package</h1>
        <form onSubmit={submit}>
          {" "}
          {/* Handle the submit event here */}
          <label>Pid</label>
          <input
            type="text"
            onChange={(e) => setPid(e.target.value)}
            required
          />
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Unit Price</label>
          <input
            type="number"
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />
          <label>Category</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <select name="Category" id="catagory">
            <option value="volvo">Interior</option>
            <option value="volvo">Exterior</option>
            <option value="saab">Hybrid Services</option>
           
          </select>
          <input className="btn" style={{color: "#000000"}} type="submit" value="Add Package" />
        </form>
      </div>
    </div>
  );
}

export default AddPackage;
