import React, {useReducer, useState} from "react";

type AccordingTitleType = {
    title: string
    onClick:()=>void
}

type ActionType ={
    type:string
}

const reducer =(state:boolean,action:ActionType)=>{
    if (action.type === "TOGGLE-COLLAPSED"){
        return !state;
    }
    return state;
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
    //let [collapsed, setCollapsed] = useState(true);
    let [collapsed, dispatch] = useReducer(reducer,false);
    return (
        <div>
            <AccordingTitle title={props.title} onClick={()=>{dispatch({type:"TOGGLE-COLLAPSED"})}} />
            {!collapsed && <AccordingBody/>}
        </div>
    )

}

export default UnControlledAccording