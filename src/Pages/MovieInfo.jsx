import { get, parseHTML } from 'jquery';
import React from 'react';
import {MoviesContext} from "./../Context/MoviesContext"
import {Link} from "react-router-dom"

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
        <div className="row center">
            { !empty &&
            <>
                <div className="col-md-3 col-sm-12">
                <img src={movie.image.original} className="img-thumbnail center align-items-center" alt="..."/>
                </div>
                <div className="col-md-7 col-sm-12 ">
                    <h2>{movie.name}</h2> 
                    <div dangerouslySetInnerHTML = {{__html:movie.summary}}/>
                    <p><b>Language: </b>{movie.language}</p>
                    <p><b>Rating: </b>{movie.rating.average}</p>
                    <p><b>Type: </b>{movie.type}</p>
                    <Link to="/" className="arrow-back">
                        <i className="bi bi-arrow-left mr-1"></i>
                        <label> Back To Movies</label>
                    </Link>
                </div>
                
            </>
            }
        </div>
     );
}
 
export default MovieInfo;