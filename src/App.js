import React from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import './App.css'
import Footer from './components/inc/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes
} from "react-router-dom";

function App() {
  return (


    
    <Router>

    <div>
        <Navbar/>
     

          <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>


        </Routes>


     
    
         
          
            
         
          
            
        <Footer/>
               
        </div>
        </Router>   
   
    
  );
}

export default App;
