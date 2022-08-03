import {useEffect, useState} from "react";
import style from './Clock.module.css'


function getTwoDigits(n: number) {
    return n < 10 ? "0" + n : n
}

export const Clock = () => {
    let [data, setData] = useState(new Date())

    let [hr_rotation,setHour]=useState(0);
    let [min_rotation,setMinute]=useState(0);
    let [sec_rotation,setSec]=useState(0);
    let [analog,setAnalog]=useState(false)


    useEffect(() => {
        const IntervalId = setInterval(() => {
            console.log('step')
            setData(new Date())
            let d = new Date();
            let hr = d.getHours();
            let min = d.getMinutes();
            let sec = d.getSeconds();
            setHour( 30 * hr + min / 2);
            setMinute( 6 * min);
            setSec(6 * sec);

        }, 1000)
        return () => clearInterval(IntervalId)
    }, [])


    return (
        <>
            <button onClick={()=>setAnalog(!analog)}>{analog?"set Analog":"set Digital"}</button>
            {analog
                ?<div className={style.container} style={{textAlign:"center"}} >
                    <span >{getTwoDigits(data.getHours())}</span>
                    :
                    <span  >{getTwoDigits(data.getMinutes())}</span>
                    :
                    <span>{getTwoDigits(data.getSeconds())}</span>
                </div>
                :<div className={style.container}>
                    <span className={style.hour} style={{transform:`rotate(${hr_rotation}deg`}}></span>
                    <span  className={style.minute} style={{transform:`rotate(${min_rotation}deg`}}></span>
                    <span  className={style.second} style={{transform:`rotate(${sec_rotation}deg`}}></span>
                </div>
            }


    </>

    )
}