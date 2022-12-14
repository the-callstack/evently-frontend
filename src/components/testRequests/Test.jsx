import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAll, selectRentalItemsState } from '../../features/rentalItems/rentalItemsSlice';

export const Test = () => {
    const dispatch = useDispatch();
  const rentalItems = useSelector(selectRentalItemsState);
  const hanldeCreate = (e) => {
    e.preventDefault();
    
    const data = { 
      name: e.target.name.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      StoreId: e.target.store.value,
      CategoryId: e.target.category.value
    }
    dispatch(getAll());
    console.log(data);
    }
  return (
    <div>
        <form className='flex flex-col w-40' onSubmit={hanldeCreate}>
        <input type='text' id='name'/>
        <input type='text' id='quantity'/>
        <input type='text' id='price'/>
        <input type='text' id='store'/>
        <input type='text' id='category'/>
        <button className='bg-yellow-300' type='submit' >Submit</button>
      </form>
    </div>
  )
}
