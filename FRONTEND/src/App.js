
// import Header from "./Components/Header";
import Header from "./Component/Header";
// import Add_Supplier from "./Components/Add_Supplier";
import Add_Supplier from "./Component/Add_Supplier";
// import Delete from "./Components/Delete";
import Delete from "./Component/Delete";
// import Display from "./Components/Display";
import Display from "./Component/Display";
import Update from "./Component/Update";

//import Register from "./Component/Register";

//import Login from "./Component/Login"; 
// import Update from "./Components/Update";
// import Test from "./Components/Test";
import Supplier_home from "./Component/Supplier_home";

import BookingPage from "./Component/BookingPage"; // import Booking Page

import Addpkg from "./Component/Add_package";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Routes>
          <Route path="/" element={  <Supplier_home/>}/>
          <Route path="/add" element={<Add_Supplier />} />
          <Route path="/display" element={<Display/>}/> 
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
          <Route path="/addpkg" element={<Addpkg/>}/>
          {/* <Route path="/test" element={<Test/>}/> */}
         
        </Routes>

      </div>
    </Router>
  );
}

export default App;

