// the very first thing we always import is react
import React from 'react';

function Movie(props){
    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;        
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`;

    return(
            <div className="col s5 m2">
                <div className="card blue">    
                    <div className="card-image"> 
                        <a href={moviePath} target="_onBlank">
                            <img alt={props.movie.title} src={imagePath} className="materialboxed" />
                        </a>
                    </div>
                <div className="card-content card-panel">
                   <h6>{props.movie.title}</h6>
                </div>
                </div>
            </div>
    )
}

export default Movie;

