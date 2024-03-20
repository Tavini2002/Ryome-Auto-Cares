import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="Container">
            <h1>Maintaince and repair  </h1>
            <h1 style= {{color: '#FF8A00'}}> Services</h1>
            <br/>
            <p>Transform the way you drive with Ryome Autocare,<br/> the pinnacle of accuracy in auto repair and <br/>maintenance.</p>
           <div className="btns">          
            <a href="" className="btn1"><button>BOOK NOW</button></a>
            <a href=""className="btn2"><button>NEW JOB</button></a>
            
            </div>
            <div className="SEC-2">
                <h1 style= {{color: '#FF8A00'}}>MAIN </h1>
                <h1>SERVICES </h1>
            </div>
            <div className="secImg">

            </div>
            
           
        </div>
        
    );
}

export default Home;
