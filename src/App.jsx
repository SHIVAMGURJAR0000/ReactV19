import { NetflixSeries } from './components/NetflixSeries'; 
import "./components/Netflix.css";
import React from 'react'

export const App=()=>{

return (
    //CONDITIONAL STYLING FOR DYNAMIC UI
<section className = "container">
<h1 className="common-heading">List of Best Netflix Series</h1>
<NetflixSeries/>
</section>
);

}



 


