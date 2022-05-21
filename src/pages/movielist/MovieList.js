import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromList } from '../../redux/actions/listActions';
import './MovieList.css';

const MovieList = () => {

    const addedMovies = useSelector(state => state.list);
    const addedMoviesArray = [...addedMovies.movies];

    const dispatch = useDispatch();

    const handleRemove = (movie) => {
        dispatch(removeFromList(movie));
    }

    return (
        <div className='movie-container'>
            <h1>Movie List ({addedMoviesArray.length})</h1>

            <div className='movie-list m'>

                {addedMoviesArray.length === 0 ? <h2>Movie list is empty</h2> : addedMoviesArray.map(movie => {
                    return (
                        <div className='movie-item' key={movie.movie.imdbID}>
                            <div className="movie-item-image">
                                <img src={movie.movie.Poster} alt="Movie Item" />
                            </div>
                            <div className="movie-item-info">
                                <div className="first-block">
                                    <h2>{movie.movie.Title}</h2>
                                    <button className='remove' onClick={() => handleRemove(movie.movie)}>✕</button>
                                </div>

                                <div className='bottom-group'>
                                    <p>Year: {movie.movie.Year}</p>
                                    <a className='link' rel='noreferrer' target='_blank' href={`https://www.imdb.com/title/${movie.movie.imdbID}/`}>Open</a>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MovieList;