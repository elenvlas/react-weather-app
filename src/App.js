import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="Kharkiv" />       
        <footer>
          This project was coded by{" "}<a href='http://www.vlasenko.io' target='_blank' rel="noreferrer">Elena Vlasenko</a>{" "}and is{" "}<a href='https://github.com/elenvlas/react-weather-app' target='_blank' rel="noreferrer">open-sourced on GitHub</a>{" "}and{" "}<a href='https://master--jade-hamster-0c9da4.netlify.app/' target='_blank' rel="noreferrer">hosted on Netlify</a> 
        </footer>
      </div>
    </div>
  );
}

