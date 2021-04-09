import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const [movies,setMovies] = useState([]);
    const [movie,setMovie] = useState({});

    const getMovies = async()=>{
        let data = [];
        await axios.get("http://api.tvmaze.com/shows")
        .then(response => {data = response.data})
        .catch(error => console.log(error))
        return data;
    }
    useEffect(()=>{
        getMovies().then(data => setMovies(data))
    },[]);

    const getMovie= (id)=>{
        console.log(id)
        movies.map(movie => {
            if(movie.id == id) {
                // console.log("fo");
                setMovie(movie)
            }
        })
    }

    return ( 
        <MoviesContext.Provider value={{movies,getMovie,movie}}>
            {props.children}
        </MoviesContext.Provider>
    );
}
 
