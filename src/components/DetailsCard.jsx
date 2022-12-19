import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import TestCarousel from './TestCarousel'

export default function DetailsCard() {
    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0)
    return (
        <div>

            <div className="flex justify-center items-center h-full bg-blue-lightest py-16">
                <div id="app" className="bg-white w-5/6   rounded shadow-md flex card text-grey-darkest  ">
                    <div className='w-1/3   shadow-md pr-2'>
                        <img className=" rounded-l-sm p-4 " src={location.state.item.imgPath} alt={location.state.item.imgNAme} />
                    </div>
                    <div className="w-2/3 flex flex-col pl-8">
                        <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1  text-6xl text-grey-darkest pt-3">{location.state.item.name}</h3>
                            <div className=" flex items-center  text-2xl pt-4">
                                <i className="fas fa-map-marker-alt mr-1 text-grey-dark "></i>
                                {location.state.item.description}
                            </div>
                            <div className="flex items-center ">
                                <div className="pr-2 text-xs pb-20">
                                    {location.state.item.CatName}
                                </div>
                            </div>
                            <span className="text-4xl text-grey-darkest ">$ {location.state.item.price}<span className="text-lg">/ unit</span></span>
                            <div className='flex items-center mt-4 pt-3 '>
                                <label className="pr-24">
                                    <input onChange={(e) => { setTotalPrice(e.target.value * location.state.item.price) }}
                                        className="w-min focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md  pl-10  ring-1 ring-slate-200 shadow-sm"
                                        type="text"
                                        aria-label="enter quantity"
                                        placeholder="enter quantity">
                                    </input>
                                </label>

                                <div className="text-4xl text-grey-darkest pl-16 text-red-500  ">

                                    {
                                        totalPrice != 0 &&
                                        <>
                                            <span className="text-lg">total Price : </span>  <span> $ {totalPrice} </span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            <div className="flex-auto flex space-x-4 pr-4">
                                <button className="   w-52 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white rounded-md"
                                    type="submit">
                                    Add to bag
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TestCarousel />

        </div>
    )
}
