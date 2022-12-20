import React from "react";
import { TypeCard } from "./TypeCard";
import img1 from '../../assets/for-rent-sign-real-estate-advertising-house-rent-vector-25856845.jpg'
import img2 from '../../assets/13885334.jpg'
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
  ]
  return (
    <div className="flex  justify-around  w-full  px-16 pt-12 pb-4" >
      {
        data.map(data => <TypeCard key={data.id} route={data.route} img={data.img} title={data.title} hash1={data.hash1} hash2={data.hash2} hash3={data.hash3} />)
      }
    </div>
  );
};
