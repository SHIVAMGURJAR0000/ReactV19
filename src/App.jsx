import { NetflixSeries } from './components/NetflixSeries'; 
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import React from 'react'
import { EventHandling } from './components/EventHandling';

export const App=()=>{

return (
   //Event Handler in React
<section className = "container">
{/* <h1 className="common-heading">List of Best Netflix Series</h1> */}
{/* <NetflixSeries/> */}
 <EventHandling/>
</section>
);

}



 


