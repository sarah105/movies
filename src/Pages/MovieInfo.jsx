import { get, parseHTML } from 'jquery';
import React from 'react';
import {MoviesContext} from "./../Context/MoviesContext"

const MovieInfo = (props) => {
    const context = React.useContext(MoviesContext);
    const movie = context.movie;
    let id = props.match.params.id;
    
    React.useEffect(()=>{
        context.getMovie(id);
    },[])

    const empty= JSON.stringify(movie)==JSON.stringify({});
   
    // console.log(empty)
    return ( 
        <div className="row">
            { !empty &&
            <>
                <div className="col-sm-3">
                <img src={movie.image.original} className="img-thumbnail" alt="..."/>
                </div>
                <div className="col-sm-9">
                    <h2>{movie.name}</h2> 
                    <p>{movie.summary}</p>
                    <p><b>Language: </b>{movie.language}</p>
                    <p><b>Rating: </b>{movie.rating.average}</p>
                    <p><b>Type: </b>{movie.type}</p>
                </div>
            </>
            }
            {/* <div className="col-sm-4">
                <img src={movie ? movie.image.medium : "..."} className="img-thumbnail" alt="..."/>
            </div>
            <div className="col-sm-8">
                {/* <h2>{movie.n/ame}</h2> }
            </div> */}
        </div>
     );
}
 
export default MovieInfo;