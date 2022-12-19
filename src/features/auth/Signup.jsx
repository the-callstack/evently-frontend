import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {selectUserState, signUp } from "./authSlice"

export const Signup = () => {
  const dispatch =useDispatch();
  const {loggedUser} = useSelector(selectUserState);
  const [password,setPassword] =useState("");
  const [rePassword, setRePassword] = useState("");
  const handlePassword =(e)=>{
    setPassword(e.target.value);
    
  }
  const handleRePassword =(e)=>{
    setRePassword(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(password===rePassword){
  const data = {
    email: e.target.email.value,
    username: e.target.userName.value,
    password: password,
    address: e.target.address.value,
    phone: e.target.mobileNum.value,
    role: e.target.default.value,
  };
  dispatch(signUp(data));
    }else{
      alert("please make sure the password is correct");
    }
  }

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Evently</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Plan your next big event!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Evently
                </h2>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Create account
                </p>
              </div>

              <div className="mt-8">
                <form enctype="multipart/form-data" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      required
                      name="userName"
                      id="userName"
                      placeholder="username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <div className=" ">
                      <div
                        className="datepicker relative form-floating mb-3"
                        data-mdb-toggle-button="false"
                      >
                        <input
                          type="date"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          data-mdb-toggle="datepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      name="mobileNum"
                      id="mobileNum"
                      placeholder="07X-XXXXXXX"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex justify-between mb-2">
                    <select
                      id="default"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option selected>Your role</option>
                      <option value="client">client</option>
                      <option value="provider">provider</option>
                    </select>
                  </div>
                  {/* <div>
                    <input
                      type="text"
                      required
                      name="address"
                      id="address"
                      placeholder="Your address"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div> */}
                  <div className="flex justify-between mb-2">
                    <select
                      id="address"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option selected>Your Address</option>
                      <option value="amman">Amman</option>
                      <option value="irbid">Irbid</option>
                      <option value="ajloun">Ajloun</option>
                      <option value="mafraq">Mafraq</option>
                      <option value="jerash">Jerash</option>
                      <option value="zarqa">Zarqa</option>
                      <option value="balqa">Balqa</option>
                      <option value="madaba">Madaba</option>
                      <option value="karak">Karak</option>
                      <option value="aqaba">Aqaba</option>
                      <option value="maan">Maan</option>
                      <option value="tafilah">Tafilah</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="file"
                      // required
                      name="img"
                      id="img"
                      placeholder="Upload your avatar"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2"></div>
                    <input
                      type="password"
                      required
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={handlePassword}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2"></div>
                    <input
                      type="password"
                      required
                      name="re-password"
                      id="re-password"
                      value={rePassword}
                      onChange={handleRePassword}
                      placeholder="Re-enter password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Already have an account !{" "}
                  <Link
                    to="/auth/signin"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign in
                  </Link>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loggedUser?.role === "provider" && <Navigate to="/provider" />}
      {loggedUser?.role === "client" && <Navigate to="/" />}
    </div>
  );
};
