import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'
 
const movies = [
   {id: 1,
   title: 'Star Wars',
   desc: 'space movie',
   },
   {id: 2,
   title: 'Deadpool',
   },
   {id: 3,
   title: 'Avengers',
   },
   {id: 4,
   title: 'Top Gun',
   },
  ];

class App extends Component {
  
  state={
    movies:{}
  }

  async componentDidMount(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=027913d6fdea8d4fa45952ac85185ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      })
    } catch(e){
      console.log(e)
    } 
  }




  updateInput = (event) =>{
    console.log(event.target.value)
    this.setState ({
      input: event.target.value.trim()
    })
  }

  submit= ()=>{
    console.log(this.text.value)
  } 
   render() {
    console.log(this.state.movies);
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       {movies.map(movie => <Movie key={movie.id} movie ={movie} desc={movie.desc}/>)}
      </div>
    );
  }
}

export default App;
