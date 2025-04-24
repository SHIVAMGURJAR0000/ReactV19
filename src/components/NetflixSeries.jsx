import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard';

export const NetflixSeries = () => {
    return (
        <ul className="grid grid-three-cols">
            {
                seriesData.map((currelem) => <SeriesCard key={currelem.id} data={currelem}/> 
                )
            }
 
        </ul>

    );
}

