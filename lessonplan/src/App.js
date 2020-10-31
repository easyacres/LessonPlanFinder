import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import "./App.css";



function App() {
  return (
    <div className="App">
   <Wrapper>
     <Nav />
     <LoginPage />
     <Footer />
   </Wrapper>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
