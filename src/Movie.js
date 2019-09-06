// the very first thing we always import is react
import React from 'react';

function Movie(props){
    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;        
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`;

    return(
        
        

            <div className="col s3 m5">
                <a href={moviePath} target="_onBlank">
                    <img src={imagePath}/>
                </a>
                <div>
                   {props.movie.title}
                </div>
            </div>
        
    )
}

export default Movie;

