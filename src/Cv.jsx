import React from "react";
import Cvintro from "./Cvintro";
import Cvcontent from "./CvContent";
import Footer from "./Footer";


function Cv()
{
    return <div className="Cv">
<Cvintro />
<Cvcontent/>
<Footer/>
    </div>
}

export default Cv;