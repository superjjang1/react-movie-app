// the very first thing we always import is react
import React from 'react';

function Movie(props){
    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;        
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`;

    return(
        <div className="container">
        

            <div className="col s3 center">
                <a href={moviePath} target="_onBlank">
                    <img src={imagePath}/>
                </a>
                <div>
                   {props.movie.title}
                </div>
            </div>
        </div>
        
    )
}

export default Movie;