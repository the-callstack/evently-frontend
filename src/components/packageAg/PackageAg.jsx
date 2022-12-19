import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PackageAg = () => {
const navigate = useNavigate();

return (
  <div>
    <div className="max-w-[80%] flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://source.unsplash.com/MP0IUfwrn0A")',
            }}
          />
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Exclucive !</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25" />
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-blue-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>{" "}
            Prepare for your Event !
          </p>
          <p className="pt-8 text-lg">
            Totally optional short description about yourself, what you do and
            so on.
          </p>
          <div className="pt-12 pb-8">
            <button
              onClick={() => navigate("/aggregator")}
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
            >
              Pick your package !
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[70%] lg:w-2/5">
        <img
          src="https://www.alinato.com/wp-content/uploads/2020/03/wedding-planner-alinato-scaled.jpg"
          alt=""
          className="rounded-none lg:rounded-lg shadow-2xl hidden h-full lg:block"
        />
      </div>
    </div>
  </div>
);
}
