import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAllCategories, selectCategoryState } from '../../features/categories/categorySlice';
import { getAllSaleItems, selectSaleItemsState } from '../../features/saleItems/saleItemsSlice';
import { FilterSale } from '../filter/FilterSale';
import { ItemCard } from '../itemCard/ItemCard';

export const SaleProduct = () => {
    const  {saleItems}  = useSelector(selectSaleItemsState);
    const { category } = useSelector(selectCategoryState);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllSaleItems());
      dispatch(getAllCategories())
  
    },[]);
    return (
      <div>
        <div className="flex justify-center gap-10 pt-10 pl-10">
          <div>
            <FilterSale category= {category.categories} /> 
          </div>
          <div className="grid grid-cols-3 gap-5 w-full h-60 pr-10" >
          {
            
            saleItems.saleItems.map(item=>{
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
}
