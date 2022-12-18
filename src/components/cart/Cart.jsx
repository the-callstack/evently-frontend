import React from "react";
import { CartCard } from "./CartCard";
export const Cart = () => {
    return (
        <>
            <div className="flex">
                <div className="w-screen" >
                    <h2 className="text-3xl w-full text-right pr-32" >Cart</h2>
                </div>

                <div className="grid grid-cols-3 gap-6 w-screen">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
            </div>
        </>
    );
};