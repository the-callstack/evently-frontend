import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRentals, getRentalByCategory, getRentalByName, getRentalByPrice } from "../../features/rentalItems/rentalItemsSlice";

export const Filter = ({category}) => {
  const [price, setPrice] = useState(1000);
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();

  const changePrice = (e) => {
    setPrice(prev => prev = e.target.value);
    dispatch(getRentalByPrice(e.target.value))
  };
  const handleSelect = (e) => {
    if(e.target.value !== 'Category'){
      dispatch(getRentalByCategory(e.target.value));
      console.log(e.target.value);
    }else{
      dispatch(getAllRentals());
    }
  }
  const handleSearch = () => {
    if(keyWord){
      dispatch(getRentalByName(keyWord))
    }
  }
  const handleReset = () => {
    setKeyWord('');
    setPrice(1000);
  }
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={handleReset}> reset </button>
        </div>
        <div className="relative" >
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" onClick={handleSearch} className="p-2 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            onChange={(e) => setKeyWord(e.target.value)}
            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
           
          />
        </div>
        <div className="flex-1 space-y-5">
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSelect}
          >
            <option selected>Category</option>
            {
              category?.map(category=>
              <option 
                key={category.id}
                value={category.id}
              >{category.name}
              </option> 
              )
            }
            
          </select>
          <div className="relative pt-1">
            <div className="flex justify-between">
              <label htmlFor="customRange2" className="form-label">
                Price
              </label>
              <span>${price}</span>
            </div>
            <input
              type="range"
              className="
    form-range
    w-full
    h-6
    p-0
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none
    "
              onChange={changePrice}
              min="0"
              max="1000"
              id="customRange2"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
