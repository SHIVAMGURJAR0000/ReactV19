import seriesData from '../api/seriesData.json'

export const NetflixSeries = () => {
    return (
        <ul>
            {
                seriesData.map((currelem) => {
                    return (<li key={currelem.id}>
                        <div>
                            <img src={currelem.img_url} alt={currelem.name} width="40%" height="40%" />
                        </div>
                        <h2>Name: {currelem.name}</h2>
                        <h3>Rating: {currelem.rating}</h3>
                        <p>Summary:{currelem.description} </p>
                        <p>Genere: {currelem.sgenre}</p>
                        <p>Caste: {currelem.scast}</p>
                        <a href={currelem.watch_url} target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </li>);
                })}
 
        </ul>

    );
}

