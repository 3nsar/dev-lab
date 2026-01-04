import React from 'react'

const Hero = () => {
  return (
    <div className="bg-cyan-950 min-h-screen flex justify-center items-center flex-col">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <h1 className="text-8xl text-center font-extrabold text-primary-white">Soo tasty....</h1>

        <div className="flex justify-center items-center gap-6 mt-10">


              <div className="relative">
                <button className="relative inline-block font-semibold leading-6 text-slate-100 cursor-pointer rounded-2xl p-px group">
                  <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-green-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 rounded-2xl bg-slate-950 group-hover:opacity-0 transition-opacity duration-300" />

                  <span className="relative block px-6 py-4 rounded-2xl bg-slate-950">
                    <div className="flex items-center justify-center gap-x-1.5">
                      <span className="font-semibold">
                        SELECT YOUR UFO
                      </span>
                      <span className='text-xl'>👽</span>
                    </div>
                  </span>
                </button>
              </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
