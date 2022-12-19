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
        
            <div className="flex flex-col w-full max-w-sm mx-auto px-5  rounded-md shadow-md overflow-hidden h-80" >
              <div
                onClick={() => handleClick(item)} 
                className="hover:cursor-pointer flex items-end justify-end h-[70%] w-full bg-cover"
                              style={{
                  backgroundImage:
                    "url(https://wallpaperaccess.com/full/2489661.jpg)",
                    // backgroundImage: item.imgPath

                }}
              >
              </div>
         
              <div className="px-5 py-3 h-[30%]">
                <h3 className="text-gray-700 font-bold uppercase hover:cursor-pointer" onClick={() => handleClick(item)}>{item.name}</h3>
                <h3 className="text-gray-700 uppercase hover:cursor-pointer" >{item.description}</h3>

                <span className="text-gray-500 mt-2">${item.price}</span>
            </div>
            
          </div>

</>
  );
};
