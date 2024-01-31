import React from 'react'


const Search = ({ search, setSearch, handelClick, weatherData, loading }) => {
 
  const getCuurentTime = () => {
    return new Date().toDateString()
  }

  return (
    <div className='WeatherCard'>

      <div className='searchBar'>
        <input
          type="text"
          placeholder='Search Weather....'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handelClick()} className='search-btn'>Search</button>
      </div>

      <div className='weatherLoader'>
        {
          loading ? <div>Loading....</div> : null
        }
      </div>

      <div className='errorRefreshPage'>
        {
          weatherData === undefined ? <div>refresh the page</div> : null
        }

      </div>

      <div>
        {
          weatherData && weatherData.main.temp ? <div>Temp:{(weatherData.main.temp - 273).toFixed(0)}°C</div> : null
        }
        {
          weatherData && weatherData.name ? <div>City:{weatherData.name} </div> : null
        }
        {
          weatherData && weatherData.sys.country ? <div>Country:{weatherData.sys.country} </div> : null
        }
        {
          weatherData && weatherData.weather[0].description ? <div>weather_type :{weatherData.weather[0].description}</div> : null
        }
        {
          weatherData && weatherData.weather[0].icon ? <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" /> : null
        }
        <div>currentTime :{getCuurentTime()}</div>
      </div>
    </div>
  )
}

export default Search;
