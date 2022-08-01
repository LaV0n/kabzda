import React, {useCallback, useMemo, useState} from "react";

export default {
    title:"useStateDemo"
}

export const Example1 = () =>{
    console.log('example1');

    const [counter,setCounter]=useState(0);

const changer =(state:number)=>{
    debugger
    return state+1
}


    return <>
        <button onClick={()=>setCounter(changer)}>counter</button>
        {counter}

    </>
}

