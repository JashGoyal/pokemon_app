import React from "react";
import { WarPokemon } from "./WarPokemon";

const War = () => {
  return (
    <>
      <div className="justify-between bg-white p-3 m-6 rounded-2xl">
        <div>
          <h1 className="text-center capitalize text-5xl">WAR</h1>
        </div>
        <div>
          <WarPokemon />
        </div>
      </div>
    </>
  );
};

export default War;
