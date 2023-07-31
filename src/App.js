import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const apiKey=process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  const pageSize=5;
    return (
      <BrowserRouter>
        <NavBar/>
        <LoadingBar color='#f11946'  progress={progress} />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>} />
        <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>} />
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>} />
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>} />
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>} />
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
    )
}

export default App;
