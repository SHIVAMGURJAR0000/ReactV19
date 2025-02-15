//DEFAULT IMPORT
// import NetflixSeries from './components/NetflixSeries'; // WE CAN NAME ANYTHING (SHIVAM INSTEAD OF NETFLIXSERIES)
//NAMED IMPORT
import { NetflixSeries } from './components/NetflixSeries'; // WITHOUT COURLY BRACES JS CONFUSE AND THINK IT IS DEFAULT.(SHOULD HAVE SAME NAME )
//MIXED IMPORT
// import functName, {funcName, funcName, funcName} from './' // but default can't come in curley braces
import React from 'react'

export const App=()=>{
  // return <h1>hel lo shivam</h1>
  // return React.createElement("h1",null, 'hello shivam' ) // tag, props, string // behid the scene
// both way work


return (
  // <div>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  // </div>

  // using array hectic because of keys
  // [
  //   <NetflixSeries key='1'/>,
  //     <NetflixSeries key='2'/>,
  //     <NetflixSeries/>,
  //     <NetflixSeries/>,
  //     <NetflixSeries/>
  // ]

  //fragment most easiest
  <React.Fragment>
   <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
     <NetflixSeries/>
    <NetflixSeries/>
 </React.Fragment>
);
}



// console.log(React.createElement("h1",null, 'hello shivam' )); // to see virtual dom

//  <h1>hello shivam</h1>

 


