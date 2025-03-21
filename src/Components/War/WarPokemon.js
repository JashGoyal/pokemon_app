import React from "react";
import { useAppContext } from "../../Context/appContext";
import { GiBattleAxe, GiBattleGear } from "react-icons/gi";

export const WarPokemon = () => {
  const { war } = useAppContext();

  function Redwins() {
    return (
      <div className="text-center justify-center flex font-bold text-3xl text-red-600 my-4">
        <GiBattleGear size={40} />
        Red Wins
      </div>
    );
  }
  function Bluewins() {
    return (
      <div className="text-center justify-center flex my-4 font-bold text-3xl text-blue-600">
        Blue Wins
        <GiBattleGear size={40} />
      </div>
    );
  }
  function Draw() {
    return (
      <div className="text-center justify-center flex my-4 font-bold text-3xl text-gray-600">
        <GiBattleAxe size={40} />
        Draw
        <GiBattleAxe size={40} />
      </div>
    );
  }
  function Noone() {
    return <h1> </h1>;
  }

  function Wins(pop) {
    const redpoke = pop.red;
    const bluepoke = pop.blue;
    if (redpoke > bluepoke) {
      return <Redwins />;
    } else if (bluepoke > redpoke) {
      return <Bluewins />;
    } else if (redpoke === bluepoke) {
      return <Draw />;
    } else {
      return <Noone />;
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 shadow outline-dashed outline-4 outline-gray-600 mt-3">
        {war.length > 0 ? (
          war.length < 3 ? (
            war.map((battle) => (
              <div className="odd:bg-red-600 flex flex-col odd:bg-opacity-90 m-2 rounded-lg items-center p-4 text-center even:bg-opacity-90 even:bg-blue-600 ">
                <h1 className="capitalize font-bold text-4xl">{battle.name}</h1>
                <img
                  className="w-64 h-64"
                  // src={battle?.sprites?.front_default}
                  src={'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'+battle.id+'.svg'}
                  alt={battle.name}
                />
                <h3 className="capitalize text-lg">
                  {battle?.types?.map((item) => item.type.name.concat(" "))}
                </h3>
                <div className="flex flex-col">
                  <label>
                    {battle.stats.reduce(
                      (acc, curr) => (acc += curr.base_stat),
                      0
                    )}
                  </label>
                  <progress
                    className="text-xl w-24 md:w-60 rounded-2xl bg-slate-300 p-1.5"
                    id="file"
                    value={battle.stats.reduce(
                      (acc, curr) => (acc += curr.base_stat),
                      0
                    )}
                    max="600"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center capitalize text-green-500">
            please  Add less pokemon
            </div>
          )
        ) : (
          <div className="text-center text-2xl capitalize text-red-500">
            No Pokemon added for war !!
          </div>
        )}
      </div>
      {war.length > 0 ? (
        war.length > 1 ? (
          war.length < 3 ? (
            <Wins
              red={war[0].stats.reduce(
                (acc, curr) => (acc += curr.base_stat),
                0
              )}
              blue={war[1].stats.reduce(
                (acc, curr) => (acc += curr.base_stat),
                0
              )}
            />
          ) : (
            <div className="hidden">ADD less pokemon</div>
          )
        ) : (
          <div className="capitalize"> second Pokemon not added for war</div>
        )
      ) : (
        <div className="hidden">no pokemon</div>
      )}
    </div>
  );
};
