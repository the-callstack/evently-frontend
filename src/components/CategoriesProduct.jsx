import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from "react-router-dom";
import { ItemCard } from './itemCard/ItemCard';
import {  selectSaleItemsState } from '../features/saleItems/saleItemsSlice';
import {  selectRentalItemsState } from '../features/rentalItems/rentalItemsSlice';

export default function CategoriesProduct() {
  const { saleItems } = useSelector(selectSaleItemsState)
  const { rentalItems } = useSelector(selectRentalItemsState)
  return (
    <div>
      <div className="flex justify-center gap-10 pt-10 pl-10">
        <div>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full  px-14 pt-4 pb-12 ">
          {
            saleItems.saleItems?.map(item => {
              return (
                <ItemCard key={item.id} item={item} />
              )
            })
          }
           {
            rentalItems.rentalItems?.map(item => {
              return (
                <ItemCard key={item.id} item={item} />
              )
            })
          }
          <Outlet />
        </div>
      </div>
    </div>
  );
}




