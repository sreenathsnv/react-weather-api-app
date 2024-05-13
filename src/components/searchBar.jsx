import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function SearchBar({setData}) {

    const [search,setSearch] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()    
        axios.get(`https://api.weatherapi.com/v1/current.json?key=0a4fb39fe48e40ee95844519241305&q=${search}&aqi=yes`).then((resp)=>{
            setData(resp.data)
        })

    }
    
  return (
    <form action="" className='search-container' onSubmit={handleSubmit}>

        <input 
            type="text" 
            name="" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}  
            id="searchfield" 
            
            required/>

        <input type="submit" value="Search" id='submit' />

    </form>
  )
 }
