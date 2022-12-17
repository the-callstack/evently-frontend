import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation } from 'react-router-dom';
import { deleteRentalItem, getStoreRentalItems, selectRentalItemsState } from '../../features/rentalItems/rentalItemsSlice';
import { deleteSaleItems, getStoreSaleItems, selectSaleItemsState } from '../../features/saleItems/saleItemsSlice';
import { AddItem } from './AddItem';
import { AddStore } from './AddStore';

export default function ItemsTable(props) {
    const dispatch = useDispatch()
    const { saleItems } = useSelector(selectSaleItemsState);
    const { rentalItems } = useSelector(selectRentalItemsState)
    const location = useLocation();

    const [allItems, setAllItems] = useState([])

    const [itemObject, setItemObject] = useState({})
    useEffect(() => {
        dispatch(getStoreSaleItems(location.state.store.id))
        dispatch(getStoreRentalItems(location.state.store.id)) 
    }, []);


    const handleSaleUpdate = (item) => {
        // console.log(item.id, item.itemName)
    }
    const handleSaleDelete = (item) => {
        dispatch(deleteSaleItems(item.id))
    }

    const handleRentalUpdate = (item) => {
        // console.log(item.id, item.itemName)
    }
    const handleRentalDelete = (item) => {
        dispatch(deleteRentalItem(item.id))
    }

    return (

        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Item Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Item Type
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* {
                                    saleItems &&
                                    saleItems.map((item) => {
                                        item.type = "SALE"
                                        // setItemObject(item)
                                        // setItemObject(...item) = 'SALE'
                                        setAllItems(...allItems, itemObject)
                                        // allItems.push(itemObject)
                                    })
                                }
                                {

                                    rentalitems &&
                                    rentalitems.map((item) => {
                                        itemObject = item
                                        itemObject.type = 'RENTAL'
                                        allItems.push(itemObject)
                                    })

                                } */}
                                
                                {saleItems.saleItems?.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {item.name}                                    </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                SALE                           </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleSaleUpdate(item)}
                                                    className="text-green-500 hover:text-green-700"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleSaleDelete(item)}
                                                    className="text-red-500 hover:text-red-700"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                                {rentalItems.rentalItems?.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                RENTAL
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleRentalUpdate(item)}
                                                    className="text-green-500 hover:text-green-700"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleRentalDelete(item)}
                                                    className="text-red-500 hover:text-red-700"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddItem/> 
        </div>
    );
}
