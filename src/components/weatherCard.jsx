import React from 'react'
import sunnyImage from '../assets/sunny.png'
import nightImage from '../assets/night.png'
export default function WeatherCard({data}) {
  console.log(data.location)
  return (
    <div className="card-container">
      <div className='header-card'>
      { data.current.is_day ===1 && <img src={sunnyImage} alt="" className='day' />}
      { data.current.is_day !==1 && <img src={nightImage} alt="" className='day' />}
        <p className='date'>{data.location.localtime.split(' ')[0]}</p>
        <p className='temp'>{data.current.temp_c}°C</p>
        <p className='tempf'>{data.current.temp_f}°F</p>
      </div>
      <div className='country-details'>
        <p className="place-name">{data.location.name}</p>
        <p className='country'>{data.location.country}</p>
      </div>
      <div className='weather'>
        <p className="condition-text">{data.current.condition.text}</p>
        <img src={data.current.condition.icon} alt="" className='condition' />
      </div>
    </div>
  )
}
