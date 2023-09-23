import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilms, selectCurrentFilm, selectFilmId } from '../../features/counter/counterSlice';
import Header from '../header/Header';
import './inside.scss';

const Inside = () =>{
    const film = useSelector(selectCurrentFilm);
    const {film_id,category} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getFilms({pageNumber:1,category:category}));
        dispatch(selectFilmId(film_id));
    },[dispatch,film_id])


    if(film){
        return(
            <>
            <Header />
                <div className='filmBackground' style = {{backgroundImage: `url("https://image.tmdb.org/t/p/w500${film.backdrop_path}")`}}></div>
                <div className = 'insideFilm'>
                    <div className = "filmPoster" style = {{backgroundImage: `url("https://image.tmdb.org/t/p/w500${film.poster_path}")`}}></div>
                    <div className = "description">
                        <h3>{film.title}</h3>
                        <span> Overview: </span>
                        {film.overview}
                    </div>
                </div>
            </>
        )
    }
    return(
        <span>Loading...</span>
    )
    
}
export default Inside;