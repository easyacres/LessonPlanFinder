import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import NewAccountPage from './pages/NewAccountPage';
import Footer from './components/Footer';
import "./App.css";
import Routes from "./router"




function App() {
  return (
    <div className="App">
     <Routes />
     <Footer />
    </div>
  );
}

export default App;

