import React, { useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {

  // USE STATE VARIABLES
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState(56)

  //API
  const api =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0be1143e55cbb02debda50a86cce2e12`;

  //SEARCH FUNCTION
  const search = (e) => {
    if(e.key === "Enter") {
      axios.get(api).then((res)=> {
        setWeather(res.data)
        setLocation('')
        setTemp(res.data.main.temp)
        console.log(res.data.main.temp)
      })
    }
  }

  //DATE FUNCTION
  const dateGetter = (num) => {

    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    const days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thrusday", "Friday", "Saturday"];

    // using number from newdate function call to display specific date from day & month arrays
    const day = days[num.getDay()]; 
    const date = num.getDate();
    const month = months[num.getMonth()];
    const year = num.getFullYear();

    return `${day}, ${month}, ${date}, ${year}`;
  }
  console.log("temp", temp)


  return (
    <div className={`App${temp < 58 ? "-cold" : ""}`}>
      <div className="main">
        <div className="container">
          <div className="text">
            <div className="location">
              {weather.name ? <p>{weather.name}</p> : null}
            </div>
            <div className="date">
              <p>{dateGetter(new Date())}</p>
            </div>
            <div className="search">
              <input
                className="input"
                value={location}
                placeholder="Search Location"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={search}
              />
            </div>
          </div>
          <div className="widget">
            <div className="temp">
              {weather.main ? (
                <p>{(((weather.main.temp - 32) * 5) / 9).toFixed()}??C</p>
              ) : null}
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
            {weather.main ? (
              <p>
                Feels Like:{" "}
                {(((weather.main.feels_like - 32) * 5) / 9).toFixed()}??C
              </p>
            ) : null}
          </div>
          <div className="humidity">
            {weather.main ? <p>Humidity: {weather.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            {weather.wind ? (
              <p>Wind: {weather.wind.speed.toFixed()} MPH</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
} 

export default App;
