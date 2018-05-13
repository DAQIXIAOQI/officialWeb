import React, { Component } from 'react';
import './App.css';
import Header from './public/header/header';
import Footer from './public/footer/footer';
import Routes from './config/route';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      
      <Router>
        <div className="container">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
