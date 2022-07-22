import Select from "../Components/Select/Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'Select usememo',
    component:Select
}

const cities = [
    {value:"1",title:"minsk"},
    {value: '2', title: "mozyr"},
    {value: '3', title: "mogly"}
]


export const SelectWithSort = () => {
    console.log('start component');
    const [counter,setCounter]=useState(0);
    const [value1, setValue1] = useState('0')
    const [value2, setValue2] = useState('0')
    const [value3, setValue3] = useState('0')

    const city1 =useMemo(()=>{
        console.log('1');
        return cities.filter(c=> c.title.indexOf('i')> -1)
    },[cities])
    const city2 =useMemo(()=>{
        console.log('2');
        return cities.filter(c=> c.title.indexOf('o')> -1)
    },[cities])
    const city3 =useMemo(()=>{
        console.log('3');
        return cities.filter(c=> c.title.indexOf('r')> -1)
    },[cities])

    return (
        <>
            <Select value={value1}
                    onChange={setValue1}
                    items={city1}/>
            <Select value={value2}
                    onChange={setValue2}
                    items={city2}/>
            <Select value={value3}
                    onChange={setValue3}
                    items={city3}/>

            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
    </>
        )
}
