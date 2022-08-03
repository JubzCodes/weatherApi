import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('')
  const api =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0be1143e55cbb02debda50a86cce2e12`;


  return (
    <div className="App">
      <div className="search">
        <input />
      </div>
      <div className="container">
        <div className="text">
          <div className="location"></div>
          <div className="date"></div>
        </div>
        <div className="widget">
          <div className="temp"></div>
          <div>
            <div className='icon'></div>
            <div className='description'></div>
          </div>
        </div>
      </div>
      <div className='extras'>
        <div className='feels'></div>
        <div className='humidity'></div>
        <div className='wind'></div>
      </div>
    </div>
  );
}

export default App;
