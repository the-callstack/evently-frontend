import React from 'react'
import { useLocation } from 'react-router-dom'

export default function StoreItemCard() {

    const location = useLocation();

    return (
        <>
            <div className="flex font-serif p-20 pt-28">
                <div className="flex-none w-96 relative">
                    <img src={location.state.item.imgPath}
                        alt={location.state.item.imgName}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg "
                        loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            {location.state.item.name
                            }
                        </h1>

                        <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                            {location.state.item.description}
                        </div>

                    </div>
                        <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                            {location.state.type} item
                        </div>

                    <div className="flex items-baseline mt-4 mb-2 pb-1 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                        </div>
                    </div>
                    <div className="flex-auto text-lg font-bold   text-slate-500">
                        ${location.state.item.price
                        }                    </div>
                    <div className="flex-auto text-lg font-bold   text-slate-500">
                        {location.state.item.quantity} piece
                    </div>

                    <div className="flex-auto text-lg font-bold   text-slate-500">
                        Categorie:  {location.state.item.CatName}
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-1 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                        </div>
                    </div>




                </form>
            </div>
        </>
    )
}
