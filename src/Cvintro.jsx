import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Cvintro(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return <div className="introContent"  data-aos="fade-left">

Work  <span className="italic">to</span> become <span className="bold">not </span>
                   to <span className="italic">a</span> <span className="highlight bold">acquire </span>.
                  <p className="cvAuthor"> —Elbert Hubbard </p>
        
    </div>;
}


export default Cvintro;