import React, { useState, useEffect } from "react";
import data from "./data";

interface Alien {
  name: string;
  age: number;
  planet: string;
  color: string;
  height: number;
  img: string;
}

const Aliens = () => {
  const [aliens, setAliens] = useState<Alien[]>([]);

  useEffect(() => {
    setAliens(data); 
  }, []);

  return (
    <div className="bg-linear-to-b from-black via-slate-050 to-purple-950 min-h-screen text-primary-white  flex justify-center">
        <div className="container mx-auto gap-10 md:gap-10 grid grid-cols-3">
            <div className="flex items-center">
            <input type="checkbox" name="checkbox" className="w-4 h-4 accent-purple-800 cursor-pointer" />
            
</div>
        {aliens.map((alien) => (
            <div key={alien.name} className="rounded-2xl bg-slate-950 border-2 border-purple-800 flex justify-center items-center flex-col">
                <img src={alien.img} alt={alien.name} />
                <p className="font-bold text-2xl mt-5">{alien.name}</p>
                <p className="text-lg">Age: {alien.age}</p>
                <p className="text-lg">Planet: {alien.planet}</p>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Aliens;
