import React from "react";
import { TypeCard } from "./TypeCard";
import img1 from '../../assets/for-rent-sign-real-estate-advertising-house-rent-vector-25856845.jpg';
import img2 from '../../assets/13885334.jpg';
import { Link } from "react-router-dom";
export const SelectProduct = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: 'Rent Here !',
      hash1: 'wedding',
      hash2: 'birthday',
      hash3: 'engagement',
      route: '/productrent'
    },
    {
      id: 2,
      img: img2,
      title: 'Buy Here !',
      hash1: 'graduation',
      hash2: 'birthday',
      hash3: 'party',
      route: '/productsale'

    }
  ];
  return (
    <>
      <div className="flex justify-evenly w-full pt-12 pb-4" >
        {
          data.map(data => <TypeCard key={data.id} route={data.route} img={data.img} title={data.title} hash1={data.hash1} hash2={data.hash2} hash3={data.hash3} />)
        }
      </div>
    </>

  );
};

       // <div className="flex gap-32 justify-around  w-full  px-16 pt-12 pb-4" >
    //   <div className=" w-full mx-4 p-8 h-[20rem] text-center">
    //     <Link to='/productsale' >
    //       <p className="h-full bg-gradient-to-t from-slate-200 hover:scale-105 duration-150 hover:shadow-lg hover:shadow-yellow-50 hover:bg-y leading-10 underline-offset-[2rem] underline tracking-widest subpixel-antialiased text-4xl rounded-lg shadow-slate-800 font-serif text-center py-16">Buy</p>

    //     </Link>
    //   </div>
    //   <div className=" w-full border-2">
    //     <h2 className="font-serif">Buy Items</h2>
    //     <Link to='/productsale' >
    //       <p>Buy</p>

    //     </Link>
    //   </div>
    // </div>