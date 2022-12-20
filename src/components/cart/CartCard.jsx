import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/Cart/CartSlice";

export const CartCard = ({ item }) => {
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(removeFromCart(item.item.id));
    };
    return (
        <>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                    <div className="w-20">
                        <img className="h-24" src={item.item.imgPath ? item.item.imgPath : '###'} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold">{item.item.name}</span>
                        <span className="text-red-500 font-semibold ">{item.item.CatName ? item.item.CatName : ' '}</span>
                        <button href="##" onClick={removeItem} className="font-semibold hover:text-red-500 text-gray-500 text-left">Remove</button>
                    </div>
                </div>
                <div className="flex justify-center  w-1/5">
                    
                    <label className="mx-2 font-semibold text-center w-16">{item.quantity}</label>
                    
                </div>
                <span className="text-center w-1/5 font-semibold">{item.item.price}</span>
                <span className="text-center w-1/5 font-semibold">{item.quantity * item.item.price}</span>
            </div>
        </>
    );
};