import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating, { RatingValueType} from "./Rating";
import rating from "./Rating";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,

} ;


export const emptyStars = ()=> <Rating value={0} onClick={x=>x}/>
export const Stars1 = ()=> <Rating value={1} onClick={x=>x}/>
export const Stars2 = ()=> <Rating value={2} onClick={x=>x}/>
export const Stars3 = ()=> <Rating value={3} onClick={x=>x}/>
export const Stars4 = ()=> <Rating value={4} onClick={x=>x}/>
export const Stars5 = ()=> <Rating value={5} onClick={x=>x}/>
export  const changeRating = () => {
    let [rating,setRating]=useState<RatingValueType>(3);
    return <Rating value={rating} onClick={setRating}/>
    }
;

