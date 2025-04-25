export const SeriesCard=({data})=>{
    // ADD CSS

 const{id, img_url, name, rating, description, cast, genre, watch_url}= data;
 //create outside to increase redialblity and here it not reload again and again at everly reload(out of render every time)
    const btn_style=  {
        padding:"1.2rem 2.4rem",
        border: "none",
        fontSize:"1.6rem",
        backgroundColor:"var(--btn-hover-bg-color)",
        color:"var(--white-color)",

    }
    return (
    <li className="card" key={id}>
        <div>
            <img src={img_url} alt={name} width="40%" height="40%" />
        </div>

        <div className="card-content" >
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        {/* <p style={
            // outer bracket means enter into js
            // now this beacket treat css as object
            //if we put this style in every element then we are repeating ourself so use flex in container
            {
                margin:"1.2rem 0"
            }
        }>Summary:{description} </p> */}
        <p >Summary:{description} </p>
        <p >Genere: {genre}</p>
        <p >Caste: {cast}</p>
        <a href={watch_url} target='_blank'>
            <button style={
              btn_style
            }>Watch Now</button>
        </a>
        </div>
       
    </li>);
}