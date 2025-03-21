import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useAppContext } from "../../Context/appContext";
import { GiAxeSword } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Player = () => {
  const { war, addToWar, removeFromWar } = useAppContext();

  const playerChecker = (id) => {
    const bool = war.some((battle) => battle.id === id);
    return bool;
  };

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((poke) => poke.id === id);
    return boolean;
  };
  return (
    <div>
      <div className="text-center">
        {war.length > 0 ? (
          war.map((battle) => (
            <button>
              <div
                className={`type ${battle?.types?.map((item) =>
                  item.type.name.concat(" ")
                )}`}
              >
                <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
                  <small className="font-semibold">#{battle.id}</small>
                </div>
                <h1 className="capitalize text-xl">{battle.name}</h1>
                <img
                  className="w-52 h-52"
                  // src={battle?.sprites?.front_default}
                  src={'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'+battle.id+'.svg'}
                  alt={battle.name}
                />
                <h3 className="capitalize">
                  {battle?.types?.map((item) => item.type.name.concat(" "))}
                </h3>
                <div className="mt-1">
                  <Link to={"/pokemon/" + battle.name}>
                    <button className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
                      <BiMessageSquareDetail size={25} />
                    </button>
                  </Link>
                  {favoritesChecker(battle.id) ? (
                    <button
                      onClick={() => removeFromFavorites(battle.id)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill color="red" size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToFavorites(battle)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill size={25} />
                    </button>
                  )}
                  {playerChecker(battle.id) ? (
                    <button
                      onClick={() => removeFromWar(battle.id)}
                      className="bg-red-500 s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <GiAxeSword size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWar(battle)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <GiAxeSword size={25} />
                    </button>
                  )}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center mt-7 text-red-600">Players not found !!</div>
        )}
      </div>
    </div>
  );
};
