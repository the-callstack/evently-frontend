import React, { useState } from 'react'
import {data} from '../../data';
export const Slider = () => {
    const myData = data ;
    const [activeSlide, setActiveSlide] = useState(1);

   const nextSliderHandler = (id) => {
    if(id === myData.length) {
        setActiveSlide(myData.length);
    } else if( id < myData.length) {
        setActiveSlide(activeSlide + 1);
    } else {
        setActiveSlide(myData.length - 1)
    }        
   }
   const prevSliderHandler = (id) => {
        if(id === 1) {
            setActiveSlide(myData.length);
        } else if( id > 1) {
            setActiveSlide(activeSlide - 1);
        } else {
            setActiveSlide(myData.length - 1)
        }
   }
  return (
<>
{myData.map(item => {
    const {image, title, id, random} = item ;
    return(
        <div key={id} className={activeSlide === id ? 'flex justify-between items-center w-full': 'hidden'}
        >
            <button className= 'text-6x1 border-2 rounded-full border-black w-8' onClick={() => prevSliderHandler(id)}>
               {'<'}
            </button>
            <div className={`flex flex-col items-center w-full`}>
            <img src={image} alt={title} className='w-full'/>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{random}</p>
            </div>
            <button className= 'text-6x1 border-2 rounded-full border-black w-8'  onClick={() => nextSliderHandler(id)}>
                {'>'}
            </button>

        </div>
    )
})}
</>
  )
}