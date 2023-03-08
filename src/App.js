import { useState } from 'react';
import axios from 'axios'
import './index.css';
function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5b4fbcf7d6e509eb53c9da99b0420765`)
        .then((response) => {
          console.log(response.data);
          setData(response.data)
        })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{(data.main.temp * 9 / 5 - 32).toFixed()}°C</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
