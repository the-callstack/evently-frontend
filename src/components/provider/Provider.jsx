import React from "react";
import { AddItem } from "./AddItem";
import { AddStore } from "./AddStore";

export const Provider = () => {
    return (
        <>
            <AddStore />
            <AddItem />
        </>
    )
}