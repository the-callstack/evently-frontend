import { Filter } from "../filter/Filter";
import { ItemCard } from "../itemCard/ItemCard";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import { selectRentalItemsState } from "../../features/rentalItems/rentalItemsSlice";
import {getAll} from '../../features/rentalItems/rentalItemsSlice';
import { Outlet } from "react-router-dom";
export const Product = () => {

  const  {rentalItems}  = useSelector(selectRentalItemsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll())
  },[])
  return (
    <div>
      <div className="flex justify-center gap-10 pt-10 pl-10">
        <div>
          <Filter />
          <input className="border border-solid border-black rounded-lg" type='date' /> 
        </div>
        <div className="grid grid-cols-3 gap-5 w-full h-60 pr-10">
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
