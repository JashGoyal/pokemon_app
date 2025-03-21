import React from "react";
import spinner from "../../images/spinner-1s-200px.svg";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <img src={spinner} className="bg-white rounded-full bg-opacity-40" alt="Loading..." />
        </div>
    );
};

export default Spinner;