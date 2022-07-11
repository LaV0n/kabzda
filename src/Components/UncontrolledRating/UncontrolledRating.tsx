import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingType = {
defaultValue?:RatingValueType
}

function UncontrolledRating(props: RatingType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue ={()=>setValue(1)}/>
            <Star selected={value > 1} setValue ={()=>setValue(2)}/>
            <Star selected={value > 2} setValue ={()=>setValue(3)}/>
            <Star selected={value > 3} setValue ={()=>setValue(4)}/>
            <Star selected={value > 4} setValue ={()=>setValue(5)}/>
        </div>
    )
}

type StarType = {
    selected: boolean
    setValue:()=>void

}

function Star(props: StarType) {
    return <span onClick={()=>props.setValue()}>
        { props.selected ? <b>star </b> : "star "}
    </span>
}

export default UncontrolledRating