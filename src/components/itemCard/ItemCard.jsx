import React from "react";

export const ItemCard = () => {

    const handleClick = () => {

    }
  return (
<React.Fragment>
<div className="container mx-auto px-6 flex justify-start">
        <div className=' '>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
              <div
                onClick={handleClick} 
                className="hover:cursor-pointer flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144)",
                }}
              >
              </div>
              <div className="flex justify-between">
              <div className="px-5 py-3 ">
                <h3 className="text-gray-700 uppercase hover:cursor-pointer">Name</h3>
                <span className="text-gray-500 mt-2">$12</span>
              </div>
              <div class="custom-number-input h-10 w-32">
              </div>
              <div>
              </div>
            </div>
          </div>
        
      </div>
      </div>

</React.Fragment>
  );
};
