import { FilterRental } from "../filter/FilterRental";
import { ItemCard } from "../itemCard/ItemCard";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { selectRentalItemsState } from "../../features/rentalItems/rentalItemsSlice";
import { getAllRentals } from '../../features/rentalItems/rentalItemsSlice';
import { Outlet } from "react-router-dom";
import { getAllCategories, selectCategoryState } from "../../features/categories/categorySlice";
import { Carousel } from "../carousel/Carousel";
export const RentalProduct = () => {

  const { rentalItems } = useSelector(selectRentalItemsState);
  const { category } = useSelector(selectCategoryState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRentals());
    dispatch(getAllCategories())

  }, []);
  return (
    <div>
      <Carousel />
      <div className="flex justify-between gap-10 pt-10 pl-14 min-h-screen">
        <div className="pt-16">
          <FilterRental category={category.categories} />
        </div>
        <div>
          {/* <div className="flex justify-center">
            <h1 className="text-5xl pb-12 ">Rental Items</h1>
          </div> */}
          <div className="grid grid-cols-3 gap-5 w-full  px-14 pt-4 pb-12 ">
            {

              rentalItems.rentalItems.map(item => {
                return (
                  <ItemCard key={item.id} item={item} />
                )
              })
            }
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
