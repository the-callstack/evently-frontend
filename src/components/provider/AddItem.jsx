import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { postSaleItems } from "../../features/saleItems/saleItemsSlice";

export const AddItem = () => {

  const dispatch = useDispatch();

  const { loggedUser } = useSelector(selectUserState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.itemName.value,
      imgPath: e.target.imagePath.value,
      quantity: e.target.quantity.value,
      price: e.target.itemPrice.value,
      CategoryId: e.target.itemCat.value,
      StoreId: loggedUser.StoreId,
    }
    console.log(loggedUser)
    dispatch(postSaleItems(data))
  }

    return (
        <>
        <form encType='multipart/form-data' onSubmit={handleSubmit} className="w-full max-w-sm ">
  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="itemName"
      >
        Item Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="itemName"
        type="text"
        placeholder="chair..."
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="quantity"
      >
        Quantity
      </label>
    </div>
    
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="quantity"
        type="number"
        placeholder="123..."
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="itemPrice"
      >
        Price
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="itemPrice"
        type="text"
        placeholder="12..."
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="inline-password"
      >
        Store Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="inline-password"
        type="text"
        placeholder="7Eleven"
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="imagePath"
      >
        Choose Image
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="imagePath"
        type="file"
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="itemCat">
        Category
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="itemCat">
          <option>category 1</option>
          <option>category 2</option>
          <option>category 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
  
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
      Rent/sale
    </label>
    <div className="relative">
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 bg-gray-200 appearance-none border-2 border-gray-200">
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Sale Item</label>
        </div>
    </li>
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Rental Item</label>
        </div>
    </li>
</ul>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3" />
    <div className="md:w-2/3">
      <button
        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add Item
      </button>
    </div>
  </div>
</form>
       </>
    )
}