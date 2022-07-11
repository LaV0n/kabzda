import React from "react";

type AccordingTitleType = {
    title:string
    onClick:()=> void
}

function AccordingTitle (props:AccordingTitleType) {
    return (
        <h3 onClick={(e)=>props.onClick()}>{props.title}</h3>
    )
}
function AccordingBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

type AccordingType ={
    title:string
    collapsed:boolean
    onClick: ()=>void
}
function According (props:AccordingType) {
        return (
            <div>
                <AccordingTitle title={props.title}
                                onClick={props.onClick}/>
                { !props.collapsed  && <AccordingBody/>}
            </div>
        )

}
export default According