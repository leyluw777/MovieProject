import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../redux/actions/listActions';

const MovieCard = ({movie}) => {

    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.list);
    const movies = [...allMovies.movies];

    const handleAddMovie = (movie) => {

        // const isInCart = movies.find(item => item.movie.imdbID === movie.movie.imdbID);
        dispatch(addToList(movie));
    }

    return (
        <div className='movie-card'>
            <div className='movie-card-image'>
                <img src={movie.Poster} alt='movie poster' />
            </div>
            <div className="movie-text">
                <div className='movie-card-title'>
                    <h3>{movie.Title}</h3>
                </div>
                <div className="movie-id">
                    <p>imdbID: {movie.imdbID}</p>
                </div>
                <div className='movie-card-year'>
                    <p>Year: {movie.Year}</p>
                </div>
                <button className='search-submit button' onClick={() => handleAddMovie({movie})}>Add to List</button>
            </div>
        </div>
    );
}

export default MovieCard;