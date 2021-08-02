import React from "react";

import Myself from "./myself";
import IntroContent from "./introContent";
import Thisisme from "./thisisme";
import Footer from "./Footer";

function HomePage()
{

    return <div className="HomePage"  >
         <Myself />
 
        <IntroContent />
        <Thisisme />
        <Footer/>
    
     
  
    </div>
}
export default HomePage;