import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Login} from "./components/Login";
import Home from "./components/Home";
import NewTask from "./components/NewTask";
import Register from "./components/Register";

class App extends Component{
  constructor(props) {
    super(props);
    localStorage.setItem('email',"admin");
    localStorage.setItem('password',"admin");
  }
  render(){
    const LoginView = () => (
      <Login />
    );
    const HomeView = () => (
      <Home />
    );
    const NewTaskView = () => (
      <NewTask />
    );
    const RegisterView = () => (
      <Register />
    );
    return (
      <Router>
        <div className="App">             
            <Route exact path="/" component={LoginView} />
            <Route exact path="/Home" component={HomeView} />     
            <Route exact path="/NewTask" component={NewTaskView} />
            <Route exact path="/Register" component={RegisterView} />
        </div>
      </Router>
    );
  }
}

export default App;
