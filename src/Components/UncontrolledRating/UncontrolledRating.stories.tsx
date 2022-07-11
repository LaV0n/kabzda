import React from 'react';
import UncontrolledRating from "./UncontrolledRating";
import uncontrolledRating from "./UncontrolledRating";



export default {
    title: 'uncontrolledRating',
    component: UncontrolledRating,
};

export const emptyStars = ()=> <UncontrolledRating defaultValue={0}/>
export const Stars1 = ()=>  <UncontrolledRating defaultValue={1}/>
export const Stars2 = ()=> <UncontrolledRating defaultValue={2}/>
export const Stars3 = ()=>  <UncontrolledRating defaultValue={3}/>
export const Stars4 = ()=>  <UncontrolledRating defaultValue={4}/>
export const Stars5 = ()=>  <UncontrolledRating defaultValue={5}/>
export  const changeRating = () => {
        return <UncontrolledRating/>
    }
;


