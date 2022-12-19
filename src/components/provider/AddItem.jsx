import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { createItem } from "../../features/rentalItems/rentalItemsSlice";
import { postSaleItems } from "../../features/saleItems/saleItemsSlice";
import { getAllCategories, selectCategoryState } from "../../features/categories/categorySlice";

export const AddItem = (props) => {

  const dispatch = useDispatch();
  // const { loggedUser } = useSelector(selectUserState);
  const { category } = useSelector(selectCategoryState);
  
  useEffect( () => {
    dispatch(getAllCategories());
  },[]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.itemName.value,
      imgPath: e.target.imagePath.value,
      quantity: e.target.quantity.value,
      price: e.target.itemPrice.value,
      description: e.target.itemDescription.value,
      CategoryId: e.target.itemCat.value,
      StoreId: props.storeId,
    }

    if(e.target.saleItemDrop.checked){
      dispatch(postSaleItems(data));
    }else{
      dispatch(createItem(data));
    }
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
        type="number"
        placeholder="12..."
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="itemDescription"
      >
        Discription
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="itemDescription"
        type="text"
        placeholder="...."
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

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="itemCat">
        Category
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="itemCat">

          <option selected>Category</option>
            {
              category.categories?.map(category=>
              <option 
                key={category.id}
                value={category.id}
              >{category.name}
              </option> 
              )
            }
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
            <input id="saleItemDrop" type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="saleItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Sale Item</label>
        </div>
    </li>
    <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="rentItemDrop" type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="rentItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Rental Item</label>
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