import React from "react";
import { Link } from "react-router-dom";
import Error from "../../images/Error.svg";

export const ErrorPage = () => {
  return (
    <div>
      <section>
        <div className="bg-black text-white">
          <div className="flex h-screen">
            <div className="m-auto text-center">
              <div>
                <img
                  src={Error}
                  classNameName="bg-white rounded-2xl bg-opacity-40"
                  alt="Loading..."
                />
              </div>
              <p className="text-sm md:text-base text-cyan-300 p-2 mb-4">
                The stuff you were looking for doesn't exist
              </p>
              <Link
                to={"/"}
                className="bg-transparent hover:bg-cyan-300 text-cyan-300 hover:text-black hover:font-semibold rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent"
              >
                Retry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
