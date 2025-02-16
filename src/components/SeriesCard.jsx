export const SeriesCard=(props)=>{
    return (
    <li key={props.currelem.id}>
        <div>
            <img src={props.currelem.img_url} alt={props.currelem.name} width="40%" height="40%" />
        </div>
        <h2>Name: {props.currelem.name}</h2>
        <h3>Rating: {props.currelem.rating}</h3>
        <p>Summary:{props.currelem.description} </p>
        <p>Genere: {props.currelem.sgenre}</p>
        <p>Caste: {props.currelem.scast}</p>
        <a href={props.currelem.watch_url} target='_blank'>
            <button>Watch Now</button>
        </a>
    </li>);
}