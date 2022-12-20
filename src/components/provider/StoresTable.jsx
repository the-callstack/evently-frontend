import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUserState } from '../../features/auth/authSlice';
import { deleteStore, getVendorStores, selectStoresState } from '../../features/stores/storesSlice';
import { AddStore } from './AddStore';
import { UpdateStore } from './UpdateStore';

export default function StoresTable() {
    const dispatch = useDispatch()
    const { stores } = useSelector(selectStoresState);
    const { loggedUser } = useSelector(selectUserState);
    const [editModal, setEditModal] = useState(false);

    const [itemObject, setItemObject] = useState({});
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(getAllStores())

        dispatch(getVendorStores(loggedUser.id))

        // console.log(stores[0].id);
    }, []);

    const handleSaleUpdate = (item) => {
        setItemObject(item);
        setEdit(true);
    }

    const handleClick = (store) => {

        navigate(`/storeitems/${store.storeName}`, {
            state: {
                store: store,
                id: store.id
            }
        })
    }

    const handleUpdate = (store) => {
        setItemObject(store);
        setEdit(true);
    }
    const handleDelete = (store) => {
        dispatch(deleteStore(store.id))
    }

    return (
        <>
            <UpdateStore show={edit} item={itemObject} setEdit={setEdit} />
            <div className="flex flex-col px-10 py-8 ">
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
                                            Store Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-left text-gray-500 uppercase "
                                        >
                                            Address
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 font-bold text-left text-gray-500 uppercase "
                                        >
                                            Phone
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
                                <tbody className="divide-y
                            divide-gray-200">
                                    {stores?.map((store, index) => {
                                        return (

                                            <tr key={index} >
                                                <td onClick={() => navigate(`/storeitems/${store.id}`, {
                                                    state: {
                                                        id: store.id
                                                    }
                                                })} className="px-6 py-4 hover:cursor-pointer text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {store.storeName}                                    </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {store.address}                             </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {store.phone}                                    </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link onClick={() => handleUpdate(store)}
                                                        className="text-green-500 hover:text-green-700"

                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a onClick={() => handleDelete(store)}
                                                        className="text-red-500 hover:text-red-700"
                                                        href="#sss"
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
                    {/* {editModal && <UpdateStore />} */}
                    {/* <UpdateStore   show={editModal}/> */}
                </div>
                <AddStore />
            </div>
        </>
    );
}
