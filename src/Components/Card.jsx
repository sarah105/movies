import React from 'react';
import {Link} from 'react-router-dom';
import "./../Css/card.css";

const Card = (props) => {
    return ( 
        <Link to={`/movies/${props.id}`} className="card text-decoration mb-4">
            <img src={props.image.medium} className="card-img-top" alt={props.name}/>
            <h5 className="card-title center card-text-color m-0">{props.name}</h5>
        </Link>
     );
}
 
export default Card;