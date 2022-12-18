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
      address: e.target.address.value,
      UserId: loggedUser.id,
    }
    console.log(data)
    dispatch(postStore(data));
  }

    return (
        <>
            <form encType='multipart/form-data' onSubmit={handleSubmit} className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="storeName"
      >
        Store Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="storeName"
        type="text"
        placeholder="7Eleven"
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="logo"
      >
        Upload Logo
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="logo"
        type="file"
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="storePhone"
      >
        Store Phone Number
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="storePhone"
        type="number"
        placeholder="078..."
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="address"
      >
        Address
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="address"
        type="text"
        placeholder="amman.."
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3" />
    <div className="md:w-2/3">
      <button
        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Create
      </button>
    </div>
  </div>
</form>
        </>
    )
}