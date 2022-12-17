import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "../../features/auth/authSlice";
import { selectStoresState } from "../../features/stores/storesSlice";
import { AddItem } from "./AddItem";
import { AddStore } from "./AddStore";
import StoresTable from "./StoresTable";
import { UpdateItem } from "./UpdateItem";
import { UpdateStore } from "./UpdateStore";

export const Provider = () => {
    const dispatch = useDispatch()
    const { stores } = useSelector(selectStoresState);
    const { loggedUser } = useSelector(selectUserState);

    return (
        <>
            {loggedUser &&
                <StoresTable />  
                
            }
            {/* <AddStore />
            <AddItem />
            <UpdateStore />
            <UpdateItem /> */}
        </>
    )
}