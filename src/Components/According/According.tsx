import React from "react";

type ItemType = {
    title:string
    value:any
}

type AccordingTitleType = {
    title:string
    onClick:()=> void
}


function AccordingTitle (props:AccordingTitleType) {
    return (
        <h3 onClick={(e)=>props.onClick()}>{props.title}</h3>
    )
}

type AccordionBodyType ={
    items:ItemType[]
    onClicke: (value:any)=>void
}

function AccordingBody (props:AccordionBodyType) {
    return (
        <ul>
            {
                props.items.map((li,index)=>
                    <li key={index}
                        onClick={()=>{props.onClicke(li.value)}}
                    >{li.title}</li>)
            }
        </ul>
    )
}

type AccordingType ={
    title:string
    collapsed:boolean
    onClick: ()=>void
    items:ItemType[]
    onClicke: (value:any)=>void

}
function According (props:AccordingType) {
        return (
            <div>
                <AccordingTitle title={props.title}
                                onClick={props.onClick}/>
                { !props.collapsed  && <AccordingBody items ={props.items} onClicke={props.onClicke}/>}
            </div>
        )

}
export default According