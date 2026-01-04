import React from 'react'

const Hero = () => {
  return (
    <div className="bg-cyan-950 min-h-screen flex justify-center items-center flex-col">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <h1 className="text-8xl text-center text-primary-white">Soo tasty....</h1>

        <div className="flex justify-center items-center gap-6 mt-10">
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-primary-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Let's get started
                  </span>

                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    />
                  </svg>
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
