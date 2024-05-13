import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './components/searchBar'
import WeatherCard from './components/weatherCard'


function App() {
  
  
  const api_key = import.meta.env.VITE_WEATHER_API_KEY
  const [data,setData] = useState(
    {
      "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1715623557,
        "localtime": "2024-05-13 19:05"
      },
      "current": {
        "last_updated_epoch": 1715623200,
        "last_updated": "2024-05-13 19:00",
        "temp_c": 17,
        "temp_f": 62.6,
        "is_day": 1,
        "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
          "code": 1003
        },
        "wind_mph": 13.6,
        "wind_kph": 22,
        "wind_degree": 170,
        "wind_dir": "S",
        "pressure_mb": 1004,
        "pressure_in": 29.65,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 68,
        "cloud": 75,
        "feelslike_c": 17,
        "feelslike_f": 62.6,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 5,
        "gust_mph": 18.1,
        "gust_kph": 29.2
      }
    }
  )
  
  useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=London`).then(
      (resp)=>{setData(resp.data)}
    )
    
  },[])

  console.log(data)
  return (
    <>
        <h1>Weather Now</h1>
        <SearchBar api_key = {api_key} setData = {setData} />
        <WeatherCard data = {data}/>

    </>
  )
}

export default App
