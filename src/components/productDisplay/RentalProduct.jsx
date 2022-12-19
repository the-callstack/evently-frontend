import { FilterRental } from "../filter/FilterRental";
import { ItemCard } from "../itemCard/ItemCard";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import { selectRentalItemsState } from "../../features/rentalItems/rentalItemsSlice";
import { getAllRentals } from '../../features/rentalItems/rentalItemsSlice';
import { Outlet } from "react-router-dom";
import { getAllCategories, selectCategoryState } from "../../features/categories/categorySlice";
export const RentalProduct = () => {

  const  {rentalItems}  = useSelector(selectRentalItemsState);
  const { category } = useSelector(selectCategoryState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRentals());
    dispatch(getAllCategories())

  },[]);
  return (
    <div>
      <div className="flex justify-center gap-10 pt-10 pl-10">
        <div>
          <FilterRental category= {category.categories} /> 
        </div>
        <div className="grid grid-cols-3 gap-5 w-full h-60 pr-10" >
        {
          
          rentalItems.rentalItems.map(item=>{
            return(
            <ItemCard key={item.id} item={item}/>
            )
          })
        }
        <Outlet />
        </div>
      </div>
    </div>
  );
};
