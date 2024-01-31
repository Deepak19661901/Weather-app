import React, { useState,useEffect } from 'react'
import './App.css'

import Search from './components/Search'
import ErrorPage from './components/ErrorPage';

const App = () => {

  const [search,setSearch] = useState('Muzaffarpur');
  const [loading ,setLoading]=useState(false);
  const [weatherData,setWeatherData]=useState('');
 
  
  const fetchWeatherData =async()=>{
    
     setLoading(true)
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bd726f1ba3b84a40d1eb9509b48507c4`);
      const data = await response.json();
      setWeatherData(data)
      setLoading(false)
    }catch(e){
      setLoading(false)

    }

  }
  const handelClick =()=>{
    fetchWeatherData();
    setSearch('');
  }
  useEffect(()=>{
    fetchWeatherData()
  },[])

  const isError = !weatherData || weatherData.cod !== 200;
  


  return (
    isError && loading===false?<ErrorPage/>:
    <div className='WeatherAppContainer'>
      <Search search={search} setSearch={setSearch} handelClick={handelClick}
      weatherData={!isError ? weatherData : null}
      loading={loading}
      />
    </div>
  )
}

export default App
