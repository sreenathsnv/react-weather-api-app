import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './components/searchBar'
import WeatherCard from './components/weatherCard'

function App() {
  
  const [data,setData] = useState({
    "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1715577057,
      "localtime": "2024-05-13 6:10"
    },
    "current": {
      "last_updated_epoch": 1715576400,
      "last_updated": "2024-05-13 06:00",
      "temp_c": 12,
      "temp_f": 53.6,
      "is_day": 1,
      "condition": {
        "text": "Overcast",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
        "code": 1009
      },
      "wind_mph": 8.1,
      "wind_kph": 13,
      "wind_degree": 220,
      "wind_dir": "SW",
      "pressure_mb": 1009,
      "pressure_in": 29.8,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 88,
      "cloud": 100,
      "feelslike_c": 11,
      "feelslike_f": 51.8,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 4,
      "gust_mph": 8.3,
      "gust_kph": 13.3,
      "air_quality": {
        "co": 230.3,
        "no2": 25.4,
        "o3": 29.3,
        "so2": 9.9,
        "pm2_5": 27.7,
        "pm10": 30.1,
        "us-epa-index": 2,
        "gb-defra-index": 3
      }
    }
  })


  
  useEffect(()=>{
    axios.get("https://api.weatherapi.com/v1/current.json?key=0a4fb39fe48e40ee95844519241305&q=Mumbai&aqi=yes").then(
      (resp)=>{setData(resp.data)}
    )
  },[])

  
  return (
    <>
        <h1>Weather Now</h1>
        <SearchBar setData = {setData} />
        <WeatherCard data = {data}/>

    </>
  )
}

export default App
