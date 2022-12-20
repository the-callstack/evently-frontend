import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { postStore } from "../../features/stores/storesSlice";

export const AddStore = () => {

  const dispatch = useDispatch();

  const { loggedUser } = useSelector(selectUserState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      storeName: e.target.storeName.value,
      phone: e.target.storePhone.value,
      logoPath: e.target.logo.value,
      address: e.target.value,
      UserId: loggedUser.id,
    }
    dispatch(postStore(data));
  }

  return (
    <>
      <div>
        <form encType='multipart/form-data' onSubmit={handleSubmit} className="flex justify-center w-full p-5 ">
          <div className="box-content rounded-lg pb-8 pt-10 w-full shadow-xl ">
            <div className="md:flex md:items-center mb-6 mx-10  pb-4">

              <label
                className="block w-[12%] text-gray-500 font-bold md:text-left mb-1 md:mb-0 mr-6"
                htmlFor="storeName"
              >
                Store Name
              </label>


              <input
                className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                id="storeName"
                required
                type="text"
                placeholder="...."
              />

            </div>
            <div className="md:flex md:items-center mb-6 mx-10 ">
              <label
                className="block text-gray-500 w-[12%] font-bold md:text-left mb-1 md:mb-0 mr-6   "
                htmlFor="logo"
              >
                Upload Logo
              </label>
              <input
                className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                id="logo"
                type="file"
                placeholder="...."
              />
            </div>


            <div className="grid grid-cols-2 gap-44 mx-10">
              <div className="md:flex md:items-center mb-6">
                <label
                  // className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 bg-blue-200"
                  className="block text-gray-500 w-1/3 font-bold md:text-left mb-1 md:mb-0 mr-6 "
                  htmlFor="storePhone"
                >
                  Phone Number
                </label>
                <input
                  className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg"
                  id="storePhone"
                  required
                  type="number"
                  placeholder="...."
                />
              </div>
              <div className="md:flex md:items-center mb-6">
                <label className="block text-gray-500 w-1/10 font-bold md:text-left mb-1 md:mb-0 mr-6 " htmlFor="address">
                  Address
                </label>


                <select className="rounded w-full py-2 px-4 text-gray-700 border-none shadow-lg" id="address">
                  <option>irbid</option>
                  <option>mafraq</option>
                  <option>jerash</option>
                  <option>ajloun</option>
                  <option>amman</option>
                  <option>zarqa</option>
                  <option>balqa</option>
                  <option>madaba</option>
                  <option>karak</option>
                  <option>aqaba</option>
                  <option>maan</option>
                  <option>tafilah</option>
                </select>

              </div>
            </div>

            <div className="md:flex mb-10 mt-14 md:items-center flex justify-center">
              <button
                className="shadow  bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-1/5"
                type="submit"
              >
                Add Store
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
