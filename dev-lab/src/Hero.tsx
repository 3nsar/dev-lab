import React from 'react'

const Hero = () => {
  return (
    <div className='text-primary-white  bg-cyan-950 min-h-screen flex justify-center items-center flex-col '>
            <div className='container mx-auto px-4 py-6 md:py-12 '>
                <h1 className='text-8xl text-center'>Soo tasty....</h1>
                <div className='flex justify-center items-center'>
                    <button className='p-5 bg-primary-black '>Food</button>
                    <button className='p-5 bg-primary-black '>Members</button>
                </div>
            </div>
    </div>
  )
}

export default Hero