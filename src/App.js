import React from 'react';
import { Component } from "react";
import './App.css';
import {Login} from "./components/Login";
import Home from "./components/Home";

class App extends Component{
  constructor(props) {
    super(props);
    localStorage.setItem('email',"admin");
    localStorage.setItem('password',"admin");
  }
  render(){
    return (
      <div className="App">
          <header className="App-header">
              {localStorage.getItem('page') === 'home' ?
                  <Home/> :
                  <Login/>
              }
          </header>
      </div>
    );
  }
}

export default App;
