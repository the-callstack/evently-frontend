import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAllCategories, selectCategoryState } from '../../features/categories/categorySlice';
import { getAllSaleItems, selectSaleItemsState } from '../../features/saleItems/saleItemsSlice';
import { Carousel } from '../carousel/Carousel';
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
        <div className='min-h-min'>
         <Carousel />

        </div>
        <div className="flex justify-between gap-10 pt-10 pl-14 min-h-screen">
          <div className="pt-16">
            <FilterSale category={category.categories} />
          </div>
          <div>
            <div className="flex justify-center">
              <h1 className="text-5xl pb-12 ">Buy Items</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full  px-14 pt-4 pb-12 ">
              {
  
                saleItems.saleItems.map(item => {
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
  