import { React, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";

import "./SingleCard.css";
const SingleCard = ({ food, loading }) => {
  const [counter, setCounter] = useState(0);
  if (loading) {
    return (
      <div className="single-card border rounded-lg border-gray-200 p-7  hover:shadow-lg hover:bg-orange-50">
        <div className="rounded-full object-cover p-20 w-40 mx-auto mb-4 skeleton" />
        <div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>

        <div className="my-5">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>

        <div className="flex justify-between">
          <div className="flex w-5"></div>
          <div className="w-10 h-2 rounded-full bg-red-200 "></div>
        </div>
      </div>
      // <div className="flex justify-center mb-32">
      //   <p className="py-36 px-10 text-red-500 font-bold flex items-center text-xl bg-red-50 rounded-lg p-7 border border-gray-200">
      //     <BiLoaderCircle className="mr-2" /> Loading...
      //   </p>
      // </div>
    );
  }
  return (
    <div className="single-card border rounded-lg border-gray-200 p-7  hover:shadow-lg hover:bg-orange-50">
      <img
        className="rounded-full object-cover p-2.5 w-44 mx-auto"
        src={food.strMealThumb}
        alt={food.strMeal}
      />
      <h3 className="text-xl font-bold"> {food.strMeal}</h3>
      <p className="my-3.5 text-gray-600">
        {food.strMeal}. The food is very popular here.
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <div
            className="rounded-full bg-orange-400 p-0 px-2.5 mr-1 cursor-pointer"
            onClick={() => setCounter((prev) => counter - 1)}
          >
            -
          </div>
          <p>{counter}</p>
          <div
            className="rounded-full bg-orange-400 p-0 px-2 ml-1 cursor-pointer"
            onClick={() => setCounter((prev) => counter + 1)}
          >
            +
          </div>
        </div>
        <p className="text-xl font-bold text-red-500">${food.idMeal}</p>
      </div>

      <div className="flex justify-center">
        <button className="bg-red-500 text-xs text-white font-bold px-6 py-3 rounded-3xl duration-500 hover:bg-orange-400">
          <p className="flex items-center">
            <IoMdCart className="mr-1" /> VIEW OPTIONS
          </p>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
