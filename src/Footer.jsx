import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

function Footer()
{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
    const year = new Date().getFullYear();

return <div className="Footer">
     <a className="Footera" href=" mailto:karthiprabha2907.com" ><MailIcon /></a>
    <a className="Footera" href="https://www.facebook.com/karthiprabha99/" ><FacebookIcon /></a>
   <a className="Footera" href="https://www.instagram.com/_._karthick_._._/"  ><InstagramIcon /></a>
   <a className="Footera"href="https://twitter.com/KarthiPrabha99"> <TwitterIcon /></a>
   <a className="Footera" href="https://www.linkedin.com/in/karthick-prabhakaran-607784201/" ><LinkedInIcon /></a>
  
    <p className="Footerp">ⓒ {year} karthick Prabakaran</p>
</div>
}
export default Footer;