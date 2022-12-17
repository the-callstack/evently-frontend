import React from "react";
import { AddItem } from "./AddItem";
import { AddStore } from "./AddStore";
import { UpdateItem } from "./UpdateItem";
import { UpdateStore } from "./UpdateStore";

export const Provider = () => {
    return (
        <>
            <AddStore />
            <AddItem />
            <UpdateStore />
            <UpdateItem />
        </>
    )
}