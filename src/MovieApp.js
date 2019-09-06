import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

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
    handleSubmit =(e) => {
        e.preventDefault();
        console.log("user submitted form");
        const movieTitle=document.querySelector('#search-term').value;
        console.log(movieTitle);
        const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
        const movieData = axios.get(searchUrl);
        movieData.then((resp)=>{
            console.log(resp.data);
            this.setState({
                movieData: resp.data.results
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
                <div className="title #8e24aa purple darken-1">
                    
                        Search Moviez   
                    
                </div>
                
                <div className="container-fluid #212121 grey darken-4">
                    <div className ="row center">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <input id="search-term" type="text" placeholder = "Enter a factual movie title"/>
                            <input type="submit" className="btn #8e24aa purple darken-1" value="search"/>
                        </form>
                        </div>
                    </div>
                    <div className="row">
                {movies}
                </div>
                </div>
            </div>

        )
    }
}

export default MovieApp;