import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilm } from '../../features/counter/counterSlice';
import './film.scss';

const Film = ({movie}) =>{
// change /films to /popular link
    return(
        <div className="film" key={movie.id}>
            <Link to={`${movie.id}`}>
                <div className = 'filmBack'
                style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")` }}>
                </div>
                <div className = 'filmTC'>
                    <span>
                        {movie.title}
                    </span>
                    <span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Film;
