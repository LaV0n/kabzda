import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title:"useEffect Demo"
}

export const Example1 = () =>{
    console.log('example1');

    const [counter,setCounter]=useState(0);
    const [fake,setFake]=useState(0)

    useEffect(()=>{
        console.log("useEffect every render")
        document.title=counter.toString()
    })
    useEffect(()=>{
        console.log("useEffect first time like componentDidMont")
        document.title=counter.toString()
    },[])
    useEffect(()=>{
        console.log("useEffect only every after counter change")
        document.title=counter.toString()
    },[counter])



    return <>
        hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>counter</button>
        <button onClick={()=>setFake(fake+1)}>fake</button>


    </>
}
export const Example2 = () =>{
    console.log('example2');

    const [time,setTime]=useState(new Date().getTime());


    //setTimeout(()=>document.title=counter.toString(),2000)

    useEffect(()=>{
        setInterval(()=>(setTime((state:number)=>state+1)),1000)
    },[])


    console.log(new Date(time).toLocaleTimeString())
    return <>
        time hell to, {new Date(time).toLocaleTimeString()}
      {/*  <button onClick={()=>setCounter(counter+1)}>counter</button>
        <button onClick={()=>setFake(fake+1)}>fake</button>*/}


    </>
}
