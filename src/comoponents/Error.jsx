import React from "react";

const Error = ({ text }) => {
  return (
    <div className="w-full mt-24 flex flex-col items-center justify-center mx-auto text-center text-blue-700  text-xl ">
      <h1>Sorry, there was an error...</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default Error;
