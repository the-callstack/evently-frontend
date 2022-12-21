import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { deleteRentalItem, getStoreRentalItems, selectRentalItemsState } from '../../features/rentalItems/rentalItemsSlice';
import { deleteSaleItems, getStoreSaleItems, selectSaleItemsState } from '../../features/saleItems/saleItemsSlice';
import { AddItem } from './AddItem';
import { AddStore } from './AddStore';
import { UpdateItem } from './UpdateItem';

export default function ItemsTable(props) {
    const dispatch = useDispatch()
    const { saleItems } = useSelector(selectSaleItemsState);
    const { rentalItems } = useSelector(selectRentalItemsState)
    const location = useLocation();
    const navigate = useNavigate();

    const [test, setTest] = useState();

    const [itemObject, setItemObject] = useState({});
    const [edit, setEdit] = useState(false);
    const [type,setType]=useState('')

    useEffect(() => {
        dispatch(getStoreSaleItems(location.state?.id));
        dispatch(getStoreRentalItems(location.state?.id));
        setTest(location.state?.id);
    }, []);

    const handleClick = (item, type) => {
        console.log(type, '--------------------------------------')
        navigate(`/storeitemDetails`, {
            state: {
                item,
                type
            }
        })
    }

    const handleSaleUpdate = (item) => {
        // console.log(item.id, item.itemName)
        // setEditItem(item);
        // edit(true);
        setType('SALE');
        setItemObject(item);
        setEdit(true);
    }
    const handleSaleDelete = (item) => {
        dispatch(deleteSaleItems(item.id))
    }

    const handleRentalUpdate = (item) => {
        // console.log(item.id, item.itemName)
        setType('RENT');
        setItemObject(item);
        setEdit(true);
    }
    const handleRentalDelete = (item) => {
        dispatch(deleteRentalItem(item.id))
    }

    return (
        <>
            <UpdateItem storeId={test} show={edit} item={itemObject} setEdit={setEdit} type={type} />
            <div className="flex flex-col px-10 py-8">
                <div className="overflow-x-auto pb-6 pt-2 px-4">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200 text-s">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-left text-gray-500 uppercase "
                                        >
                                            Item Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-left text-gray-500 uppercase "
                                        >
                                            Item Type
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-right text-gray-500 uppercase "
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {saleItems.saleItems?.map((item, index) => {
                                        return (
                                            <tr key={index} >
                                                <td onClick={() => handleClick(item, "SALE")} className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {item.name}                                    </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    SALE                           </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link onClick={() => handleSaleUpdate(item)}
                                                        className="text-green-500 hover:text-green-700"

                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a onClick={() => handleSaleDelete(item, "RENTAL")}
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

                                            <tr key={index} >
                                                <td onClick={() => handleClick(item, "RENTAL")} className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    RENTAL
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link onClick={() => handleRentalUpdate(item)}
                                                        className="text-green-500 hover:text-green-700"

                                                    >
                                                        Edit
                                                    </Link>
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
                <AddItem storeId={location.state?.id} />
            </div>
        </>
    );
}
