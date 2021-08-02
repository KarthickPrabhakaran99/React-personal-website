import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function IntroContent(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return <div className="introContent"  data-aos="fade-left">

       Looking <span className="italic">for</span> an <span className="bold">opportunity </span>
                   to find <span className="italic">a</span> <span className="bold">way </span><span className="italic">to</span>
                  <span className="highlight bold"> success</span>.
        
    </div>;
}


export default IntroContent;