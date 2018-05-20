import React, { Component } from 'react';
import './App.css';
import './font/iconfont.css';
import Header from './public/header/header';
import Footer from './public/footer/footer';
import Banner from './public/banner/banner';
import Routes from './config/route';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'


class App extends Component {
  constructor(){
    super();
  }
  componentWillMount(){
    console.log(window.location.pathname);
  }
  render() {
    return (
      
      <Router>
        <div className="container">
          <Header />
          <Banner />  
          <Routes />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
