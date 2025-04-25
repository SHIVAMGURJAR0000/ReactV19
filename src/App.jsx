import { NetflixSeries } from './components/NetflixSeries'; 
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import React from 'react'

export const App=()=>{

return (
   //Tailwind Css
<section className = "container">
<h1 className="common-heading">List of Best Netflix Series</h1>
<NetflixSeries/>
</section>
);

}



 


