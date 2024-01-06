import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather />       
        <footer>
          This project was coded by{" "}<a href='http://www.vlasenko.io' target='_blank' rel="noreferrer">Elena Vlasenko</a>{" "}and is{" "}<a href='https://github.com/elenvlas/react-weather-app' target='_blank' rel="noreferrer">open-sourced on GitHub</a> 
        </footer>
      </div>
    </div>
  );
}

