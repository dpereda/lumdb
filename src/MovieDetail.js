import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
   state={
     movie: {},
   }

   async componentDidMount() {
     try {
       const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=027913d6fdea8d4fa45952ac85185ad7&language=en-US`);
       const movie = await res.json();
       this.setState({
         movie,
       });
     } catch (e) {
       console.log(e);
     }
   }

   render() {
     // const { movie } = this.state;
     return (
       <div>
         <img src={`${BACKDROP_PATH}${this.state.movie.backdrop_path}`} alt={this.state.movie.title} />
         <img src={`${POSTER_PATH}${this.state.movie.poster_path}`} alt={this.state.movie.title} />
         <h1>{this.state.movie.title}</h1>
         <h3>{this.state.movie.release_date}</h3>
         <p>{this.state.movie.overview}</p>
       </div>
     );
   }
}

export default MovieDetail;