import {useEffect, useState} from "react";


function getTwoDigits (n:number) {
    return  n<10? "0"+n : n
}

export const Clock =()=>{
    let [data,setData]=useState(new Date())

    useEffect(()=>{
        const IntervalId= setInterval(()=>{
            console.log('step')
            setData(new Date())
        },1000)
        return ()=> clearInterval(IntervalId)
    },[])
    return(
      <>
          <span>{getTwoDigits(data.getHours())}</span>
          :
          <span>{getTwoDigits(data.getMinutes())}</span>
          :
          <span>{getTwoDigits(data.getSeconds())}</span>
      </>
    )
}