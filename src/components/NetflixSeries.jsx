import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard';

export const NetflixSeries = () => {
    return (
        <ul>
            {
                seriesData.map((currelem) => <SeriesCard key={currelem.id} data={currelem}/> 
                )
            }
 
        </ul>

    );
}

