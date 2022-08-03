import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

// USE STATE VARIABLES
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('')

//API
  const api =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0be1143e55cbb02debda50a86cce2e12`;

  //SEARCH FUNCTION
  const search = (e) => {
    if(e.key === "Enter") {
      axios.get(api).then((res)=> {
        setWeather(res.data)
        setLocation('')
        console.log(res.data)
      })
    }
  }


  return (
    <div className="App">
      <div className="search">
        <input 
        value={location}
        placeholder = "Search Location"
        type="text"
        onChange={e => setLocation(e.target.value)}
        onKeyPress={search}
        />
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
