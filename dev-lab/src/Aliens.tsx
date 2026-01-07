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
  const [selectedAliens, setSelectedAliens] = useState<string[]>([]);

  useEffect(() => {
    setAliens(data);
  }, []);

  // Checkbox function
  const handleAlienChange = (name: string) => {
    setSelectedAliens((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-slate-950 to-purple-950 text-slate-100">

      {/* CHECKBOX*/}
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center py-20">
        {aliens.map((alien) => (
          <label
            key={alien.name}
            className="flex items-center text-gray-300 mr-10 mb-4 cursor-pointer hover:text-gray-400 transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedAliens.includes(alien.name)}
              onChange={() => handleAlienChange(alien.name)}
              className="w-4 h-4 mr-2 cursor-pointer"
            />
            <span className="text-sm md:text-base">{alien.name}</span>
          </label>
        ))}
      </div>

      {/* CARDS */}
      <div className="container mx-auto pb-20">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {aliens
            .filter(
              (alien) =>
                selectedAliens.length === 0 || selectedAliens.includes(alien.name)
            )
            .map((alien) => (
              <div
                key={alien.name}
                className="rounded-2xl bg-slate-950 border-2 border-purple-800 flex flex-col items-center p-5"
              >
                <img src={alien.img} alt={alien.name} />
                <p className="font-bold text-2xl mt-5">{alien.name}</p>
                <p className="text-lg">Age: {alien.age}</p>
                <p className="text-lg">Height: {alien.height}m</p>
                <p className="text-lg">Color: {alien.color}</p>
                <p className="text-lg">Planet: {alien.planet}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Aliens;
