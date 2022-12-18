import React from "react";

export const Alert = () => {
  return (
    <>
      <div
        className="bg-red-200 border border-red-200 text-red-700 px-4 mt-3 py-3 h-10 rounded flex items-center"
        role="alert"
      >
        <span className="block font-semibold font-sans sm:inline ">
          Email or password are incorrect !
        </span>
      </div>
    </>
  );
};
