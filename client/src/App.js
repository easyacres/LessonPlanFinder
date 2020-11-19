import React from 'react';
import Footer from './components/Footer';
import "./App.css";
import Routes from "./router"
import PDFViewer from './components/PDFViewer';


function App() {
  return (
    <div className="App">
      <PDFViewer />
     <Footer />
    </div>
  );
}

export default App;

