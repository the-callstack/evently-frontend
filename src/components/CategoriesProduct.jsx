// import { Filter } from "../filter/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";
import { ItemCard } from './itemCard/ItemCard';
// import FilterCategory from './filter/FilterCategory';
import { getSaleByCategory, selectSaleItemsState } from '../features/saleItems/saleItemsSlice';
import { getRentalByCategory, selectRentalItemsState } from '../features/rentalItems/rentalItemsSlice';

export default function CategoriesProduct() {
  const { saleItems } = useSelector(selectSaleItemsState)
  const { rentalItems } = useSelector(selectRentalItemsState)
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {

    // dispatch(getSaleByCategory(location.state.category.id))
    // dispatch(getRentalByCategory((location.state.category.id)))
    // if (location.state.showBy == "Category") {
    //   console.log('true');

      // dispatch(getSaleByCategory(location.state.category.id))
      // dispatch(getRentalByCategory((location.state.category.id)))
  //   }

  // }, [])
  return (
    <div>
    
      <div className="flex justify-center gap-10 pt-10 pl-10">
        <div>
          {/* <FilterCategory categoryId={location.state.category.id} /> */}
          {/* <input className="border border-solid border-black rounded-lg" type='date' /> */}
        </div>
        <div className="grid grid-cols-3 gap-5 w-full h-60 pr-10">

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




