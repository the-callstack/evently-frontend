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
        category: category
      }
    })
  }

  return (
    <>
      <div className="carousel my-12 mx-auto px-16 pt-4">
        <h1 className="text-3xl pb-10"> Choose category</h1>
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75  w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
              className="hover:bg-blue-900/75 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
                  className="carousel-item text-center relative w-64 h-64 snap-start  flex flex-col  hover:cursor-pointer   group"  >
                  <h3 className="text-transparent py-6 px-3 mx-auto text-lg group-hover:text-3xl text-black  ">
                    {resource.name}
                  </h3>
                  <div onClick={() => handleClick(resource)}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0  opacity-75 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${resource.catImgPath || ''})` }}
                  >
                    <img
                      src={resource.catImgPath || ''}
                      alt={resource.name}
                      className="w-full aspect-square hidden   "
                    />
                  </div>
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
