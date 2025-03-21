import React from "react";
import { Link } from "react-router-dom";
import Players from "./Players";
import War from "./War";
import { TiArrowBack } from "react-icons/ti";
import ScrollToTop from "react-scroll-to-top";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ScrollToBottom from "react-scroll-to-bottom";


export const Battle = () => {
  return (
    <>
    <ScrollToTop
        smooth
        component={
          <div className="ml-1.5">
            <BsFillArrowUpCircleFill color="red" size={25} />
          </div>
        }
      />
      <Link to={"/"}>
        <button className="flex bg-white s m-3 p-4 rounded-lg  text-red-700">
          <TiArrowBack size={20} /> Back
        </button>
      </Link>
      <War />
      <Players />
      <ScrollToBottom  />
    </>
  );
};
