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
        <div className="container mx-auto px-4 py-6 md:py-12 grid grid-cols-3">
        {aliens.map((alien) => (
            <div key={alien.name}>
                <p className="font-bold">{alien.name}</p>
                <p>Age: {alien.age}</p>
                <p>Planet: {alien.planet}</p>
                <img src={alien.img} alt={alien.name} />
            </div>
        ))}
        </div>
    </div>
  );
};

export default Aliens;
