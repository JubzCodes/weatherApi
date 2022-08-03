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
          placeholder="Search Location"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <div className="container">
        <div className="text">
          <div className="location">
            {weather.name ? <p>{weather.name}</p> : null}
          </div>
          <div className="date"></div>
        </div>
        <div className="widget">
          <div className="temp">
            {weather.main ? <p>{weather.main.temp}</p> : null}
          </div>
          <div>
            <div className="icon"></div>
            <div className="description">
              {weather.weather ? (
                <p> {weather.weather[0].description}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="extras">
        <div className="feels">
          {weather.main ? <p> {weather.main.feels_like}</p> : null}
        </div>
        <div className="humidity">
          {weather.main ? <p> {weather.main.humidity}</p> : null}
        </div>
        <div className="wind">
          {weather.wind ? <p> {weather.wind.speed}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
