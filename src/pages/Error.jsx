import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404 Not Found</h1>
        <p className="text-gray-400 w-96 mb-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat
          at maiores reprehenderit amet a.
        </p>
        <Link to={"./"} className="border border-black px-5 py-1">Go Home</Link>
      </div>
    </section>
  );
};

export default Error;
