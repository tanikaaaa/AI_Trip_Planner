import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-10'><span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>Personalized Itineraries at Your Fingertips</h1>

      <p className='text-xl text-gray-900 text-center'>From dreamy escapes to weekend getaways, get smart, personalized itineraries—instantly, all in one place</p>

      <Link to={'/create-trip'}><Button>Get Started, It's free</Button></Link>

      <img src="/landing.png" alt="" className='w-[750px]' />

    </div>
  )
}

export default Hero