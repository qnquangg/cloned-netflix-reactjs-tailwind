import axios from 'axios'
import React from 'react'
import requests from '../Requests'
import { useEffect, useState } from 'react'

const Main = () => {

  const [movies, setMovies] = useState([])

  // explain: Math.floor() returns the largest integer less than or equal to a given number. 
  // Math.random() returns a random number between 0 (inclusive), and 1 (exclusive). 
  // So, Math.random() * movies.length returns a random number between 0 and movies.length. 
  // Math.floor(Math.random() * movies.length) returns a random integer between 0 and movies.length - 1. 
  // This random integer is used to select a random movie from the movies array.
  const movie = movies[Math.floor(Math.random() * movies.length)] 

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
    </div>
  )
}

export default Main
