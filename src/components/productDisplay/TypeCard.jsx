import React from "react";
import { useNavigate } from "react-router-dom";

export const TypeCard = ({ img, title, hash1, hash2, hash3, route }) => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full hover:cursor-pointer" src={img} onClick={() => handleNavigate(route)} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hash1}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hash2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hash3}</span>
      </div>
    </div>
  );
};



// <div className=" px-4 w-1/2 h-80 rounded overflow-hidden  ">
// <img
//   className="w-full  h-full hover:cursor-pointer"
//   src={img}
//   alt="select type"
//   onClick={() => handleNavigate(route)}
// />
// <div className="px-6 py-4">
//   <div className="font-bold text-xl mb-2 hover:cursor-pointer hover:opacity-70"
//     onClick={() => handleNavigate(route)}
//   >{title}</div>

// </div>
// <div className="px-6 pt-4 pb-2">
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #{hash1}
//   </span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #{hash2}
//   </span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #{hash3}
//   </span>
// </div>
// </div>