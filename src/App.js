import React from 'react';
import './App.css'; 
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import Banner from "./components/Banner"


function App() {
    return(
      <>
       {/* <Navbar/>
       <Banner/> */}
       <div className='container'>
        <div className='row'>
          <div className='col'><Navbar/></div>
        </div>
        <div className='row'>
          <div className='col'><Banner/></div>
        </div>
        {/* <Navbar/>
        <Banner/> */}
        <div className='row'>
          <Card/>
        </div>
       </div>
      </>
    )
}

export default App;
