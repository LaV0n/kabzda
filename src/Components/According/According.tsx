import React from "react";

type ItemType = {
    title:string
    value:any
}

type AccordingTitleType = {
    title:string
    onClick:()=> void
}

const AccordingTitle=React.memo(AccordingTitleSecret)
const AccordingBody=React.memo(AccordingBodySecret)


function AccordingTitleSecret (props:AccordingTitleType) {
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    )
}

type AccordionBodyType ={
    items:ItemType[]
    onClicke: (value:any)=>void
}

function AccordingBodySecret (props:AccordionBodyType) {
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