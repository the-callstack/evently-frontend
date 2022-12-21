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
<div class="w-full min-h-full p-6 flex flex-col">
              
                    <img onClick={() => handleClick(item)} alt='' className="hover:grow hover:shadow-lg" src={item.imgPath?item.imgPath:`https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80`}/>
                    <div class="pt-3 flex items-center justify-between">
                        <p onClick={() => handleClick(item)} className="hover:cursor-pointer text-lg">{item.name}</p>
                    </div>
                    <p class="pt-1 text-gray-900">£{item.price}</p>
            </div>
{/* 
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
            
          </div> */}
          


</>
  );
};
