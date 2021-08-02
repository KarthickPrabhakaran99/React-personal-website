import React,{ useEffect } from "react";
import KarthiBlack from "./img/karthiBlack.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



function Thisisme()
{
    useEffect(()=>{
         AOS.init({duration:2000})
    },[]);
 return <div className="thisisme"  data-aos="fade-in">
     
<img className="karthiBlack"  data-aos="fade-left" src={KarthiBlack} alt="karthick" />

<div className="thisismeHead" data-aos="fade-right" >

</div>
<div className="thisismeHeadContent" data-aos="fade-left"><h1 className="thisismeHeadp">This is <span className="bold">me</span> </h1></div>
 <div className="thisismeContent" data-aos="fade-up">
     <p className="thisismep">I am one of the <span className="highlightBlack" data-aos="fade-in">several faces </span>you see everyday
I am one of the few you <span className="highlightWhite" data-aos="fade-in">remembered</span>.

I am one of the <span className="highlightBlack" data-aos="fade-in">several people</span> you talk to everyday
I am one the few who listened.

I will make myself heard, you cannot <span className="highlightWhite" data-aos="fade-in">let my voice drown</span>
You will believe in me sooner or later, you will know <span className="highlightBlack" data-aos="fade-in">I won't let you down</span>.</p>
 </div>
 <div className="thisismeContent1"  data-aos="fade-up"></div>
 </div>;   
}

export default Thisisme;