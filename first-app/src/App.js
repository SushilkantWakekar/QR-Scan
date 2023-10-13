import './App.css';
import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  return(
  
    <Webcam />
  
)
  }

  
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>About US</a></li>
          <li><a href=''>Contact Us</a></li>
        </ul>
      </nav>
      <div className='camera-section'>
      <div className='scanner-container'>
        
       <WebcamComponent />
        
      </div>
      <button className='btn' onClick={""}>Scan Any QR</button>
      </div>
    </div>
    
  );
}

export default App;
