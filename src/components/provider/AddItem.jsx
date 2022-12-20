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

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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
    console.log(data.name)
    console.log(data.quantity)
    console.log(data.price)
    console.log(data.description)
    console.log(data.CategoryId)
    console.log(data.StoreId)

    if (e.target.saleItemDrop.checked) {
      dispatch(postSaleItems(data));
    } else {
      dispatch(createItem(data));
    }
  }


  return (
    <>
      <div>
        <form encType='multipart/form-data' onSubmit={handleSubmit} className="flex justify-center w-full p-5 ">
          <div className="box-content rounded-lg pb-8 pt-10 w-full shadow-xl ">
            <div className="md:flex md:items-center mb-6 mx-10  pb-4">
              <label
                className="block w-[12%] text-gray-500 font-bold md:text-left mb-1 md:mb-0 mr-6"
                htmlFor="itemName"
              >
                Item Name
              </label>
              <input
                className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                id="itemName"
                required
                type="text"
                placeholder="...."
              />
            </div>
            <div className="grid grid-cols-2 gap-44 mx-10">
              <div className="md:flex md:items-center mb-6">
                <label
                  // className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 bg-blue-200"
                  className="block text-gray-500 w-1/3 font-bold md:text-left mb-1 md:mb-0 mr-6 "
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                  id="quantity"
                  required
                  type="number"
                  placeholder="...."
                />
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 w-1/10 font-bold md:text-left mb-1 md:mb-0 mr-6 " htmlFor="itemPrice">
                  Price
                </label>
                <input type="number" className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg" placeholder="...." id="itemPrice" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-44 mx-10">
              <div className="md:flex md:items-center mb-6">
                <label
                  // className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 bg-blue-200"
                  className="block text-gray-500 w-1/3 font-bold md:text-left mb-1 md:mb-0 mr-6 "
                  htmlFor="itemDescription"
                >
                  Description
                </label>
                <input
                  className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                  id="itemDescription"
                  required
                  type="text"
                  placeholder="...."
                />
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 w-1/10 font-bold md:text-left mb-1 md:mb-0 mr-6 " htmlFor="imagePath">
                  Image
                </label>
                <input type="file" className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg" placeholder="...." id="imagePath" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-44 mx-10">
              <div className="md:flex md:items-center mb-6">
                <label
                  // className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 bg-blue-200"
                  className="block text-gray-500 w-1/3 font-bold md:text-left mb-1 md:mb-0 mr-6 "
                  htmlFor="itemCat"
                >
                  category
                </label>
                <select className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg" id="itemCat">

                  <option>Category</option>
                  {
                    category.categories?.map(category =>
                      <option
                        key={category.id}
                        value={category.id}
                      >{category.name}
                      </option>
                    )
                  }
                </select>

              </div>
              <div className="md:flex md:items-center mb-6 ">
                <label className="block text-gray-500 w-1/10 font-bold md:text-left mb-1 md:mb-0 mr-6 " htmlFor="grid-state">
                  Rent/sale
                </label>
                <ul className="grid grid-cols-1 w-48 text-lg shadow-lg text-gray-900 border rounded-sm  ">
                  <li className="w-full  border-b border-gray-200 dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="saleItemDrop" type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="saleItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Sale Item</label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input id="rentItemDrop" type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="rentItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Rental Item</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex mb-10 mt-14 md:items-center flex justify-center">
              <button
                className="shadow  bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-1/5"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}