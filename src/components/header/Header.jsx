import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUserState } from "../../features/auth/authSlice";
import Logo from "../../assets/logo.png";
import { getAllCategories, selectCategoryState } from "../../features/categories/categorySlice";

export default function Header() {
  const { isLoggedIn, loggedUser } = useSelector(selectUserState);
  const [show, setShow] = useState(false);
  const [showCat, setShowCat] = useState(false);

  const [scroll, setScroll] = useState('navy');
  const dispatch = useDispatch();
  const { category } = useSelector(selectCategoryState);

  const handleSignOut = () => {
    dispatch(logout());
  };

  const handleClickProduct = () => {
    setShow((prev) => !prev);
  };
  const handleClickCat = () => {
    setShowCat((prev) => !prev);
  };
  const handleScroll = () => {
    setScroll('none');
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    dispatch(getAllCategories());


    return () => {
      window.addEventListener('scroll', handleScroll);

    };
  }, []);

  return (
    <>
      <div className={`flex sticky top-0 font-serif z-20 backdrop-blur-md bg-${scroll} duration-200 shadow-inner rounded-b-lg  flex-wrap place-items-center min-w-screen`}>
        <section className="relative mx-auto w-full">
          <nav className="flex justify-between text-yellow-600 m-w-screen">
            <div className="px-5 xl:px-12 py-5 flex w-screen items-center">
              <Link className="p-0 m-0 h-10" to="/">
                <img className="h-full p-0 m-0" src={Logo} alt="logo" />
              </Link>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="hover:text-gray-200" to="/">
                    Home
                  </Link>
                </li>
                {loggedUser?.role === "provider" && (
                  <li>
                    <Link className="hover:text-gray-200" to="/provider">
                      Provider
                    </Link>
                  </li>
                )}
                <li>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={handleClickProduct}
                        type="button"
                        className="inline-flex w-full justify-center hover:text-gray-200"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Products
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {show && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <Link
                            onClick={() => setShow((prev) => !prev)}
                            to="/productrent"
                            className="text-gray-100 hover:text-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Rent Items
                          </Link>
                        </div>
                        <div
                          className="py-1 border-t-2 border-gray-600"
                          role="none"
                        >
                          <Link
                            onClick={() => setShow((prev) => !prev)}
                            to="/productsale"
                            className="text-gray-100 hover:text-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            Buy Items
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </li>



                <li>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={handleClickCat}
                        type="button"
                        className="inline-flex w-full justify-center hover:text-gray-200"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Categories
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {showCat && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        {console.log(category.categories)}
                        {category.categories?.map((resource, index) => {
                          return (
                            <div className="py-1" role="none">
                              <Link
                                onClick={() => setShowCat((prev) => !prev)}
                                to= {`/CatProducts/${resource.id}`}  state = {{
                                  category: resource,
                                }}
                                
                                className="text-gray-100 hover:text-gray-200 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                              >
                                {resource.name}
                              </Link>
                            </div>
                          );
                        })}



                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <Link className="hover:text-gray-200" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li></li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5">
                {!isLoggedIn && (
                  <Link
                    className="hover:text-gray-200 hover:underline"
                    to="/auth/signin"
                  >
                    {" "}
                    Sigin in
                  </Link>
                )}
                {isLoggedIn && (
                  <button
                    className="hover:text-gray-200 hover:underline"
                    onClick={handleSignOut}
                  >
                    {" "}
                    Sign out
                  </button>
                )}
                <Link className="hover:text-gray-200" to="#ss">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
                <Link
                  className="flex items-center hover:text-gray-200"
                  to="/cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/*---- the commment under is for the red dot when there is new item inside the cart ----*/}
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-1 hover:text-gray-200"
                  to="/profile"
                  title="Profile page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {isLoggedIn && <h3> {loggedUser.username} !</h3>}
                </Link>
              </div>
            </div>
            <Link className="xl:hidden flex mr-6 items-center" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </Link>
            <Link className="navbar-burger self-center mr-12 xl:hidden" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
