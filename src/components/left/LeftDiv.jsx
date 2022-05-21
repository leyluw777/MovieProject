import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../moviecard/MovieCard';
import './LeftDiv.css';

const LeftDiv = () => {

    const [input, setInput] = useState('');
    const [movieData, setMovieData] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(movieData === undefined ? 'no data' : 'data available');
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://www.omdbapi.com/?apikey=6816cac0&s=' + input);
            const data = await response.json();
            setMovieData(data.Search);
        }
        getData();
    });

    const moviesObject = useSelector(state => state.list);
    const movieArray = [...moviesObject.movies];

    return (
        <div className='left'>
            <div className='search-group'>

                <div className="fixed-button">
                    {movieArray.length > 0 && <a href='#down' title='got to the list section'>&#8595;</a>}
                </div>

                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type='text' placeholder='Search...' className='search-bar' />
                </form>

                <div className='movie-list'>
                    {movieData === undefined ? <p></p> : movieData.map((movie) => {
                        return (
                           
                                <MovieCard
                                    movie={movie}
                                />
                           
                        );
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default LeftDiv;