export const SeriesCard=(props)=>{
    //the above props can be destrructure when passing just add SeriesCard=({data})  now use data instead if props.data
    // console.log(props);
    //object destructuring
    //const data = props.data
    //after that we can remove props in our code.
    //example  props.data.name ,now data.name
    //const {data} = props;
    // console.log(data);
 // more destructure because still we have to write data.something
 const{id, img_url, name, rating, description, cast, genre, watch_url}= props.data;
    
    return (
    <li key={props.data.id}>
        <div>
            <img src={img_url} alt={name} width="40%" height="40%" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary:{description} </p>
        <p>Genere: {genre}</p>
        <p>Caste: {cast}</p>
        <a href={watch_url} target='_blank'>
            <button>Watch Now</button>
        </a>
    </li>);
}