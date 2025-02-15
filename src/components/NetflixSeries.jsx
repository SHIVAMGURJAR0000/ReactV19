import seriesData from '../api/seriesData.json'

//component not a function, always start with capital letter
export const NetflixSeries=()=>
    {
      const name = "Queen of Tears";
      const rating = "8.2";
      const summary= "uptates consequuntur nemo nisi totam eos facilis eaque error verm facere labore porro harum commodi nesciunt sequi fuga quis? Quisquam laudantium voluptates sipisci vero quihil fuga temporibus nisi dolores voluptatibus, nostrum soluta? Suscipit eum laborum soluta officia. Nam elgiate repellat voluptas a officia dignissimos. Eligendi.";
      // let age = 19;
     
      const returnGenre=()=>{
    const genre= "RomCom"; 
    return genre;
  }
  
  
  // type 1 of conditional value use : this violate DRY
  // if(age<18){
  //   return (
  // <div>
  //   <div>
  //     <img src="th.jpg" alt="" width="40%" height="40%"/>
  //   </div>
  //   <h2>Name: {name}</h2>
  //   <h3>Rating: {rating}</h3>
  //   <p>Summary:{summary} </p>
  //   <p>Genere: {returnGenre()}</p>
  //   <button>Not available </button>
  // </div>
  //   );
  // }
  
  //second way is do not repeat yourself use ternary direct in button
  
  //third way sometimes you might have very complex if conditions, for that there are some solutions
  // let canWatch = "Not Available";
  // if(age>18) canWatch= "Watch Now";
  
  // fourth solution : solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
  // one another benefit is also that , you can also pass some dynamic values as function parameter
  const canWatch=(age)=>{
    if (age>=18) return "Watch Now"
    return "Not Available"
  }
  
  return (
  <div>
    <div>
      <img src="th.jpg" alt="" width="40%" height="40%"/>
    </div>
    <h2>Name: {name}</h2>
    <h3>Rating: {rating}</h3>
    <p>Summary:{summary} </p>
    <p>Genere: {returnGenre()}</p>
    {/* <button>{age>18?"watch":"not availbale"}</button> {second way}  */}
    {/* <button>{canWatch}</button> */}
     {/* <button>{canWatch(20)}</button> */}
  </div>
  ); 
  }
  
// DEFAULT EXPORT
// export default NetflixSeries;

// NAMED EXPORT
// IN THIS USE EXPORT KEYWORD AT THE TOP WHERE YOUR FUNCTION WRITTEN 
//EXAMPLE : EXPORT CONST FUNCTION(){}


//NAMED EXPORT 
// WE CAN USE DEFAULT AND NAMED BOTH
// IMPORTANT : DEFAULT HAVE ONLY ONE EXPORT AND NAMED CAN BE MULTIPLE 