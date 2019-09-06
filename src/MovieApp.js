import React, { Component } from 'react';
import Movie from './Movie';

class MovieApp extends Component {
    constructor(){
        super();
        console.log("constructor ran");
        this.state = {movieData:[]}
    }
    componentDidMount(){ //already binded
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        console.log("componentmounted");
        fetch(url).then((response)=>{
            return response.json();
        }).then((movieJSON)=>{
            console.log(movieJSON);
            this.setState({
                movieData : movieJSON.results
            })
        })
    }
    render() {
        console.log("rendered man");
        console.log(this.state.movieData);
        const movies = this.state.movieData.map((movie, i)=>{
            return (
                <Movie key={i} movie={movie} />
            )
        })
        return (
            <div>
                <h1>This is a movie</h1>
                <div className="container">
                    <div className="row">
                {movies}
                </div>
                </div>
            </div>

        )
    }
}

export default MovieApp;