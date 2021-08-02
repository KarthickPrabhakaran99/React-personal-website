import React ,{useEffect} from "react";
import './styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {Link} from "react-router-dom";

function Header() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[]);
  return (
    <div>
  
    <nav className="Header">
       

    <Link className="navele" to="/" data-aos="fade-left"><p className="navele">Home</p></Link>
    <Link className="navele" to="/cv" data-aos="fade-left"><p className="navele">CV</p></Link>
    <Link className="navele"  to="/contact" data-aos="fade-left"><p className="navele">Contact</p></Link>
   
    </nav>
    
    </div>
  );
}

export default Header;
