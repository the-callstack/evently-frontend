import React from "react";

export const AlertTempo = ({ show, setEdit, msg }) => {
  const showMenu = () => {
    setEdit(false);
  };

  return (
    <>
      <div
        className={
          show
            ? `w-full h-full bg-opacity-80 top-0 fixed sticky-0`
            : `hidden`
        }
      >
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0  m-10 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
              {/*header*/}

                <div
                  class="flex p-4 mb-0 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">Success alert!</span>
                    {msg}
                     
                  </div>
                </div>
              <div className="flex items-center justify-end h-4 p-6 border-t border-slate-200 rounded-b">
                <button
                  className="text-black font-serif bg-green-600 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={showMenu}
                >
                  Done
                </button>
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  );
};
