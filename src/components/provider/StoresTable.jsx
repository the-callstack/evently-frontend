import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserState } from '../../features/auth/authSlice';
import { deleteStore, getVendorStores, selectStoresState } from '../../features/stores/storesSlice';
import { AddStore } from './AddStore';

export default function StoresTable() {
    const dispatch = useDispatch()
    const { stores } = useSelector(selectStoresState);
    const { loggedUser } = useSelector(selectUserState);

    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(getAllStores())
        dispatch(getVendorStores(loggedUser.id))

        console.log(stores);
    }, []);

    const handleClick = (store) => {

        navigate(`/storeitems/${store.storeName}`, {
            state: {
                store: store
            }
        })
    }

    const handleUpdate = (store) => {
        console.log(store.id, store.storeName)
    }
    const handleDelete = (store) => {
        dispatch(deleteStore(store.id))
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
                                        Store Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Phone
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
                                {stores?.map((store, index) => {
                                    return (

                                        <tr onClick={() => handleClick(store)} key={index} >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {store.storeName}                                    </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {store.address}                             </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {store.phone}                                    </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleUpdate(store)}
                                                    className="text-green-500 hover:text-green-700"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a onClick={() => handleDelete(store)}
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
            <AddStore />
        </div>
    );
}
