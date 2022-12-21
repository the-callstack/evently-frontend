import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { selectStoresState, updateStore } from "../../features/stores/storesSlice";

export  const UpdateStore = ({show, store, setEdit}) => {

  const showMenu = () => {
    setEdit(false);
  };
  // const [menu, setMenu] = useState(show);

  const dispatch = useDispatch();
  const { loggedUser } = useSelector(selectUserState);
  const  { stores }  = useSelector(selectStoresState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      storeName: e.target.storeName.value,
      phone: e.target.storePhone.value,
      logoPath: e.target.logo.value,
      address: e.target.address.value,
      UserId: loggedUser.id,
      id: stores
    }
    console.log(stores)
    dispatch(updateStore(data))
  }

  return (
    <>
      {/* <button
        className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={showMenu}
      >
        Open store modal
      </button> */}

        <div className={(show) ? `w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0` : `hidden`}>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 m-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Store
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
        htmlFor="storeName"
      >
        New Store Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="storeName"
        type="text"
        defaultValue={store.storeName}
        placeholder={store.storeName}
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="storePhone"
      >
        New Store Phone Number
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="storePhone"
        type="number"
        defaultValue={store.phone}
        placeholder={store.phone}
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="address"
      >
        New Address
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="address"
        type="text"
        defaultValue={store.address}
        placeholder={store.address}
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        htmlFor="logo"
      >
        New Logo
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="logo"
        type="file"
        defaultValue={store.logoPath}
      />
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3" />
    <div className="md:w-2/3">
      
    </div>
  </div>
                {/*footer*/}
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
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}