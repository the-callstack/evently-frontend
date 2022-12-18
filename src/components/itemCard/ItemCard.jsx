import React from "react";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({item}) => {
  const navigate = useNavigate();
    const handleClick = (item) => {
      navigate(`/products/${item.id}`,{
        state: {
          item
        }
      })
    }
  return (
<>
        
            <div className="flex flex-col w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" >
              <div
                onClick={() => handleClick(item)} 
                className="hover:cursor-pointer flex items-end justify-end h-[75%] w-full bg-cover"
                              style={{
                  backgroundImage:
                    "url(https://wallpaperaccess.com/full/2489661.jpg)",
                }}
              >
              </div>
         
              <div className="px-5 py-3 h-[25%]">
                <h3 className="text-gray-700 uppercase hover:cursor-pointer" onClick={() => handleClick(item)}>{item.name}</h3>
                <span className="text-gray-500 mt-2">${item.price}</span>
            </div>
          </div>

</>
  );
};
