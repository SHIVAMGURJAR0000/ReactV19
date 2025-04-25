export const SeriesCard=({data})=>{
  

    
    // summary
    //1. to use contion in class use templeate literal.
    //2. You can use class's with condtion.
    //3. If you using inline style and using object for styling then use template literal for styling.

 const{id, img_url, name, rating, description, cast, genre, watch_url}= data;
 
    const btn_style=  {
        padding:"1.2rem 2.4rem",
        border: "none",
        fontSize:"1.6rem",
        backgroundColor:`${rating>=8.5? "#7dcea0":"#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer",

    }

    const ratingClass = rating>=8.5?"super_hit": "average";
    return (
    <li className="card" key={id}>
        <div>
            <img src={img_url} alt={name} width="40%" height="40%" />
        </div>

        <div className="card-content" >
        <h2>Name: {name}</h2>
        {/* with conditional expression we can write more thatn one class using string literals */}
        {/* This piece of code will render everythime and look uneasy to eyes */}
        {/* <h3>Rating: <span className={`rating ${rating>=8.5?"super_hit":"average"}`}>{rating}</span> </h3> */}
        <h3>Rating: <span className={`rating ${ratingClass}`}>{rating}</span> </h3>
       
        <p >Summary:{description} </p>
        <p >Genere: {genre}</p>
        <p >Caste: {cast}</p>
        {/* For button we used inlien styling btn_style which is object then how can we apply condition here */}
        <a href={watch_url} target='_blank'>
            <button style={
              btn_style
            }>Watch Now</button>
        </a>
        </div>
       
    </li>);
}