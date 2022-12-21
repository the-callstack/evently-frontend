import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, selectCategoryState } from "../../features/categories/categorySlice";
import { updateSaleItems } from "../../features/saleItems/saleItemsSlice";
import { updateItem } from "../../features/rentalItems/rentalItemsSlice";

export const UpdateItem = ({ show, item, setEdit, storeId, type }) => {

  const showMenu = () => {
    setEdit(false);
  };

  const dispatch = useDispatch();
  // const { loggedUser } = useSelector(selectUserState);
  const { category } = useSelector(selectCategoryState);

  const options = category.categories?.map(category =>
    <option
      key={category.id}
      value={category.id}
    >{category.name}
    </option>
  )


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
      StoreId: storeId,
      id: item.id
    }
    console.log(data);

    if (type === 'SALE') {
      dispatch(updateSaleItems(data));
    } else {
      dispatch(updateItem(data));
    }
  }
  return (
    <>
      {/* <button
        className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={showMenu}
      >
        Open item modal
      </button> */}

      <div className={(show) ? `w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0` : `hidden`}>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0  m-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Update Item
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={showMenu}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <form encType='multipart/form-data' onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6 pt-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="itemName"
                    >
                      New Item Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="itemName"
                      type="text"
                      defaultValue={item.name}
                      placeholder={item.name}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="quantity"
                    >
                      New quantity
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="quantity"
                      type="number"
                      defaultValue={item.quantity}
                      placeholder={item.quantity}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="itemPrice"
                    >
                      New Item Price
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="itemPrice"
                      type="text"
                      defaultValue={item.price}
                      placeholder={item.price}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="imagePath"
                    >
                      New Image
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="imagePath"
                      type="file"
                      defaultValue={item.imgPath}
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
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="itemDescription"
                      type="text"
                      defaultValue={item.description}
                      placeholder={item.description}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="itemCat">
                      Category
                    </label>
                    <div className="relative">

                      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="itemCat">

                        <option selected>Category</option>
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
                      {/* <select defaultValue={{ label: ' {item.CatName}', value: '{item.CategoryId}' }} placeholder={item.CatName}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="itemCat"

                        // <option>Category</option>

                        {...options}

                      /> */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap -mx-3 mb-2">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="grid-state">
                        Rent/sale
                      </label>
                      <div className="relative">
                        <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 bg-gray-200 appearance-none border-2 border-gray-200">
                          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className="flex items-center pl-3">
                              <input id="saleItemDrop" type="radio" value="1" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="saleItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Sale Item</label>
                            </div>
                          </li>
                          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div className="flex items-center pl-3">
                              <input id="rentItemDrop" type="radio" value="2" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                              <label htmlFor="rentItemDrop" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">Rental Item</label>
                            </div>
                          </li>
                        </ul>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={showMenu}
                  >
                    Close
                  </button>
                  <button
                    className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
              {/*footer*/}

            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>

    </>
  )
}