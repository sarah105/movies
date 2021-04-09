import React from 'react';
import {MoviesContext} from "./../Context/MoviesContext";
import Card from "./../Components/Card";

const Movies = () => {
    const movies = React.useContext(MoviesContext).movies;

    return ( 
        <div className="row">
            {movies.length &&
                movies.map(movie => 
                    <div className="col-md-2" key={movie.id}>
                        <Card {...movie}/>
                    </div>
                )
            }
            
        </div>
     );
}
 
export default Movies;