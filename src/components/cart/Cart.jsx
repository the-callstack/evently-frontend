import React from "react";
import { CartCard } from "./CartCard";
export const Cart = () => {
    return (
        <>
        <div className="flex flex-col items-center">
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
        </div>
        </>
    )
}