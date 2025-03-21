import React from "react";
import { Player } from "./Player";

const Players = () => {
  // console.log(war , "hi")
  return (
    <>
      <div className="justify-between bg-white p-3 m-6 rounded-2xl">
        <div>
          <h1 className="text-center capitalize text-5xl">Players</h1>
        </div>
        <Player />
      </div>
    </>
  );
};

export default Players;
