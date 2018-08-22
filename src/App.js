import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'
 
const movies = [
   {id: 1,
   title: 'Star Wars',
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
  state ={
    input: "Hello"
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       {movies.map(movie => <Movie key={movie.id} movie ={movie}/>)}
      </div>
    );
  }
}

export default App;
