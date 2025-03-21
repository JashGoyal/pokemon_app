import React from "react";
import { useAppContext } from "../../Context/appContext";
import { GiAxeSword } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AddFavorites } from "./Addfavorite";
import { TiArrowBack } from "react-icons/ti";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  const { war, addToWar, removeFromWar } = useAppContext();

  const playerChecker = (id) => {
    const bool = war.some((battle) => battle.id === id);
    return bool;
  };

  return (
    <>
      <div className="">
        <Link to={"/"}>
          <button className="flex absolute bg-white s m-3 p-4 rounded-lg  text-red-700">
            <TiArrowBack size={20} /> Back
          </button>
        </Link>
      </div>
      <div className="text-center">
        {favorites.length > 0 ? (
          favorites.map((poke) => (
            <button>
              <div
                className={`type ${poke?.types?.map((item) =>
                  item.type.name.concat(" ")
                )}`}
              >
                <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
                  <small className="font-semibold">#{poke.id}</small>
                </div>
                <h1 className="capitalize text-xl">{poke.name}</h1>
                <img
                  className="w-52 h-52"
                  // src={poke?.sprites?.front_default}
                  src={'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'+poke.id+'.svg'}
                  alt={poke.name}
                />
                <h3 className="capitalize">
                  {poke?.types?.map((item) => item.type.name.concat(" "))}
                </h3>
                <div className="mt-1">
                  <Link to={"/pokemon/" + poke.name}>
                    <button className="bg-white p-1.5 rounded-md s shadow hover:shadow-69xl mx-2">
                      <BiMessageSquareDetail size={25} />
                    </button>
                  </Link>
                  {favoritesChecker(poke.id) ? (
                    <button
                      onClick={() => removeFromFavorites(poke.id)}
                      className="bg-white p-1.5 s rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill color="red" size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToFavorites(poke)}
                      className="bg-white p-1.5 s rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill size={25} />
                    </button>
                  )}
                  {playerChecker(poke.id) ? (
                    <button
                      onClick={() => removeFromWar(poke.id)}
                      className="bg-red-500 s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <GiAxeSword size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWar(poke)}
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
          <h1>
            <AddFavorites />
          </h1>
        )}
      </div>
    </>
  );
};

export default Favorites;
