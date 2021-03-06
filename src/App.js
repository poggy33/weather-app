import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("Ivano-Frankivsk");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4f625b6c6693cf0b7d4d66e65cd65a7d`;

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
    setLocation("");
  };
  const currentDate = new Date().toString().slice(4, 15);

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />

        <button onClick={searchLocation}>Go!!!</button>
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="data">{data.main ? <p>{currentDate}</p> : null}</div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} m/s</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        <footer>Copyright &copy; Ihor Pohaidak 2022</footer>
      </div>
    </div>
  );
}

export default App;
