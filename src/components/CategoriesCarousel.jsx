import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAllCategories, selectCategoryState } from '../features/categories/categorySlice';
import { getAllRentals, getRentalByCategory } from '../features/rentalItems/rentalItemsSlice';
import { getAllSaleItems, getSaleByCategory } from '../features/saleItems/saleItemsSlice';
export default function CategoriesCarousel() {
  const { category } = useSelector(selectCategoryState);
  const dispatch = useDispatch()

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    dispatch(getAllCategories())
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const navigate = useNavigate();

  const handleClick = (category) => {
    dispatch(getSaleByCategory(category.id))
    dispatch(getRentalByCategory((category.id)))

    navigate(`/CatProducts/${category.id}`, {
      state: {
        category: category,
        showBy: "Category"
      }
    })
  }

  return (
    <>
      <div className="carousel my-12 mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('prev')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('next')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {category.categories?.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-64 h-64 snap-start  flex flex-col hover:cursor-pointer"  >
                  <div onClick={() => handleClick(resource)}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${resource.catImgPath || ''})` }}
                  >
                    <img
                      src={resource.catImgPath || ''}
                      alt={resource.name}
                      className="w-full aspect-square hidden"
                    />

                  </div>
                  <h4 className="text-black">
                    {resource.name}
                  </h4>
                  <h4 className="text-black">
                    {resource.id}
                  </h4>




                  {/* <Link className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imgPath || ''})` }} to='https://online.ltuc.com/d2l/home'>
                  <img
                    src={resource.imgPath || ''}
                    alt={resource.name}
                    className="w-full aspect-square hidden"
                  />
                </Link> */}

                  {/* <a 
                  href={resource.imgPath}


                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.id} {resource.imgPath}
                  </h3>
                </a> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
        <Outlet />
    </>
  );
};
