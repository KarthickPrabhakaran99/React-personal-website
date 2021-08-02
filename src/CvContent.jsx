import React,{ useEffect } from "react";
import KarthiNew from "./img/karthiNew.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



function CvContent()
{
    useEffect(()=>{
         AOS.init({duration:2000})
    },[]);
 return <div className="thisisme"  data-aos="fade-in">
     
<img className="karthiNew"  data-aos="fade-left" src={KarthiNew} alt="karthick" />

<div className="thisismeHead" data-aos="fade-right" >

</div>
<div className="thisismeHeadContent" data-aos="fade-left"><h1 className="thisismeHeadp">Curriculam<span className="bold"> vitae</span> </h1></div>
 <div className="cvContent" data-aos="fade-up">
 <p className="thisismep" data-aos="fade-left">Academics:</p>
 <table data-aos="fade-up">
 <tr>
             <td className="tableHighlightWhite">SSLC & HSC</td>
             <td className="tableHighlightBlack">Smt. Chandabai Pagariya Jain Matric 
Hr, Sec School </td>
</tr>
<tr>
<td className="tableHighlightBlack">BE CSE
</td>
             <td className="tableHighlightWhite">Velammal Engineering College </td>
             </tr>
 </table >
   
     <p className="thisismep" data-aos="fade-left">Skills & Technologies:
   </p>
   <table data-aos="fade-up">
        <tr>
             <td className="tableHighlightBlack">Programming Language</td>
             <td className="tableHighlightWhite">Java, JavaScript, C, C++, python</td>
        </tr>
        <tr> <td className="tableHighlightWhite" >Front End</td>
        <td className="tableHighlightBlack" > Html, Css, ReactJs, Flutter</td></tr>
        <tr><td className="tableHighlightBlack">Back End</td>
        <td className="tableHighlightWhite">Nodejs, SQL, FireBase</td></tr>
   </table>
   
   <p className="thisismep" data-aos="fade-left">Projects:
   </p>
   <div className="projectContent">
   <p className="projectContentBlack" data-aos="fade-right" >Ambulance Booking App:</p>
   <p> This app developed using flutter and Firebase. This app helps to book Ambulance nearby which 
saves many emergency situations.</p>
<p className="projectContentWhite" data-aos="fade-right" >My Chat App: </p>
<p>This app is developed using flutter and Firebase. This app is all about a group messaging app.</p>
 <p className="projectContentBlack" data-aos="fade-right" >Mr. Survivor:</p>
 <p>This game is developed using Unreal Engine. This game is a first person survival  game to collect 
every orb that is available in the game suviving every obstacle in the game.</p>
</div>
 </div>
 <div className="thisismeContent1"  data-aos="fade-up"></div>
 </div>;   
}

export default CvContent;