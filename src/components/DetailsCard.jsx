import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUserState } from '../features/auth/authSlice';
import { addToCart } from '../features/Cart/CartSlice';
import { AlertTempo } from './alert/AlertTempo';
import TestCarousel from './TestCarousel'

export default function DetailsCard() {
    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0);
    const [quentityItem, setQuentityItem] = useState(0);
    const [edit, setEdit] = useState(false);
    const [product, setProduct] = useState({});
    const {isLoggedIn} = useSelector(selectUserState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // {
    //     item: {
    //         name: "chair",
    //         price: 20,
    //         id: 1,
    //         type: 'rental'
    //     },
    //     quantity: 10
    // }
    const handleClick = () => {
        if(isLoggedIn){
            const item = {
                item: {
                            name: product.name,
                            price: product.price,
                            id:product.id,
                            type: 'sale'
                        },
                        quantity:quentityItem 
            }
            // console.log(item);
            console.log(dispatch(addToCart(item)));
            setEdit(true)
        }else {
            navigate('/auth/signin');
        }
    }


    useEffect(()=> {
        setProduct(location.state.item);
    },[])
    return (
        <div>

            <div className="flex justify-center items-center h-full bg-blue-lightest py-16">
                <div id="app" className="bg-white w-5/6   rounded shadow-md flex card text-grey-darkest  ">
                    <div className='w-1/3   shadow-md pr-2'>
                        <img className=" rounded-l-sm p-4 w-full " src={product.imgPath?product.imgPath:`https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80`} alt={product.imgNAme} />
                    </div>
                    <div className="w-2/3 flex flex-col pl-8">
                        <div className="p-4 pb-0 flex-1">
                            <h3 className="font-light mb-1  text-6xl text-grey-darkest pt-3">{product.name}</h3>
                            <div className=" flex items-center  text-2xl pt-4">
                                <i className="fas fa-map-marker-alt mr-1 text-grey-dark "></i>
                                {product.description}
                            </div>
                            <div className="flex items-center ">
                                <div className="pr-2 text-xs pb-20">
                                    {product.CatName}
                                </div>
                            </div>
                            <span className="text-4xl text-grey-darkest ">$ {product.price}<span className="text-lg">/ unit</span></span>
                            <div className='flex items-center mt-4 pt-3 '>
                                <label className="pr-24">
                                    <input onChange={(e) => {
                                        setQuentityItem(e.target.value)
                                        setTotalPrice(e.target.value * product.price)
                                }}
                                        className="w-min focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md  pl-10  ring-1 ring-slate-200 shadow-sm"
                                        type="text"
                                        aria-label="enter quantity"
                                        placeholder="enter quantity">
                                    </input>
                                </label>

                                <div className="text-4xl text-grey-darkest  pl-16 text-red-500  ">

                                    {
                                        totalPrice !== 0 &&
                                        <>
                                            <span className="text-lg">total Price : </span>  <span> $ {totalPrice} </span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                            <div className="flex-auto flex space-x-4 pr-4">
                                <button
                                onClick={handleClick}
                                // className="w-52 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white rounded-md"
                                className=" hover:bg-slate-700 hover:text-yellow-400 text-yellow-600 border-b-2 hover:shadow-sm duration-100 hover:scale-105 shadow-lg font-bold py-2 mt-10 px-4 rounded-xl"

                                   type="submit">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AlertTempo show={edit} setEdit={setEdit} msg='Item has been added to the cart.' />
            <TestCarousel itemId={product.id} />
        </div>
    )
}
