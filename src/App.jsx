import { NetflixSeries } from './components/NetflixSeries'; 
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import React from 'react'

export const App=()=>{

return (
    //CSS Modules
    //every time we import css file it work like global file.
    //Css module help you to style specific component.
    // particular jis componenet pe css lagana h uske hi lagega.
    //each module encapsulate its style.
    //ask in interview the class name in css modules are often automatically gen (read from the slide)
    // jab bhji css module use krte h aur usme class name dete ho to kya uski value change hoti h ya exactly same rehta h ans -- unique banata h
<section className = "container">
<h1 className="common-heading">List of Best Netflix Series</h1>
<NetflixSeries/>
</section>
);

}



 


