import React from "react";
import { Link } from "react-router-dom";
import Add from "../../images/add.jpg";

export const AddFavorites = () => {
  return (
    <div>
      <section>
        <div className="bg-black text-white">
          <div className="flex h-screen">
            <div className="m-auto text-center">
              <div className="">
                <img
                  src={Add}
                  className="bg-white ml-6 rounded-2xl bg-opacity-40"
                  alt="Loading..."
                />
              </div>
              <p className="text-4xl  md:text-base text-cyan-300 capitalize p-2 mb-4">
                You have not edited your favorite pokemon
              </p>
              <Link
                to={"/"}
                className="bg-transparent hover:bg-cyan-300 text-cyan-300 hover:text-black hover:font-semibold rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent"
              >
                Add
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
