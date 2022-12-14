import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TestCarousel from './TestCarousel'

import Review from './Review'

export default function DetailsCard() {
    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <>
            <div className="flex font-serif p-20 pt-28 bg-red-500" >
                <div className="flex-none w-96 relative bg-yellow-400">
                    <img src={location.state.item.imgPath}
                        alt={location.state.item.imgName}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg "
                        loading="lazy" />
                </div>
                <form className="flex-auto p-6 bg-blue-600">
                    <div className="flex flex-wrap items-baseline  bg-green-500">
                        <h1 className="w-full flex-none mb-3 text-5xl leading-none  text-slate-900">
                            {location.state.item.name}
                        </h1>

                        <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                            In stock
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-2 pb-1 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                        </div>
                    </div>
                    <div className="flex-auto text-lg font-bold   text-slate-500">
                        $ {location.state.item.price}
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-1 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                        </div>
                    </div>
                    <div className= ' grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12 bg-green-500 '>
                        <label>
                            <input onChange={(e) => { setTotalPrice(e.target.value * location.state.item.price) }}
                                className="w-min focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                                type="text"
                                aria-label="enter quantity"
                                placeholder="enter quantity">
                            </input>
                        </label>

                        <div className="flex-auto text-lg font-bold  text-red-500  text-slate-500">
                            {
                                totalPrice != 0 &&
                                <p> $ {totalPrice} </p>
                            }
                        </div>
                    </div>

                    <div className="flex items-baseline mt-4 mb-2 pb-1 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-5 text-sm font-medium">
                        <div className="flex-auto flex space-x-4 pr-4">
                            <button className="flex-none w-52 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white rounded-md"
                                type="submit">
                                Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                            type="button"
                            aria-label="Like">
                            <svg width="20"
                                height="20"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>

                </form>
            </div>
            <TestCarousel />
            <Review />
        </>
    )
}
