import React, {useState} from "react";

type AccordingTitleType = {
    title: string
    onClick:()=>void

}


function AccordingTitle(props: AccordingTitleType) {
    return (
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function AccordingBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

type AccordingType = {
    title: string
}

function UnControlledAccording(props: AccordingType) {
    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordingTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} />
            {!collapsed && <AccordingBody/>}
        </div>
    )

}

export default UnControlledAccording