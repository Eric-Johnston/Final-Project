import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import './App.css';
import image from './reel.png';
// import Forms from './Components/Forms/Forms';
import Footer from './components/Footer/Footer';
import NameForm from './components/Forms/NameForm';
// import Navbar from './Components/Navbar/Navbar';
// import Dashboard from './Components/Dashboard';
import Search from './components/Search/search';
// import Landing from './Components/Landing';
// import Dashboard from './Components/Dashboard';
// import Header from './Components/Header';
// import axios from 'axios';

          

 class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Welcome to MoviezTVSource. Please Create a Profile So You Can Enjoy The Best Movie and TV Experience On The Web",
      userpath: "startpage"
    };
  }


LogIn = () => {
  this.setState ({
    title: 'Logged In!',
    userpath: "login"
    
   
      })
    //condiional to swap rendering
    }


signUp = () => {
  this.setState ({
    title: 'Enter Profile Information to Get Started',
    userpath: "signup"
  })
  
}
clear = () => {
  this.setState ({
    title: 'Welcome to MoviezTVSource. Please Create a Profile So You Can Enjoy The Best Movie and TV Experience On The Web',
    userpath: "startpage"
  })
  
}
//  class App extends Component {
  render() {
    return (
     
      <div className="App">
      
        <header className="App-header">
        
        
          <img src={image} className="App-logo" alt="logo" />
          </header>
          <div className="intro">
          <h1>{this.state.title}</h1>
          <h3>{this.state.userpath}</h3>
          
        </div>
        <button onClick={this.LogIn}>Log In</button>

        <button onClick={this.signUp}>Sign Up</button>
        
      
        
     {(this.state.userpath === "signup")&&
        <Search />
     }

          
          {(this.state.userpath === "login")&&
           <NameForm />
     }
   

      <Footer />     
       
      </div> 
  
    );

  }
}
  
export default App;
