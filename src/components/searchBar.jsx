import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function SearchBar({setData,api_key}) {

    const [search,setSearch] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()    
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${search}&aqi=yes`).then((resp)=>{
            if( resp.status !== 200){
                    alert("Inavlid input check again!!")
            }
            setData(resp.data)
        }).catch(
            alert("Invalid input!! check again")
        )

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
