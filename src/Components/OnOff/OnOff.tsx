import classes from './OnOff.module.css'
import {useState} from "react";

type OnOffType = {
    status: boolean
    onClick:(value:boolean)=>void
}

function OnOff(props: OnOffType) {

    const blockOn = {
        width: "60px",
        height: "30px",
        border: "1px solid black",
        paddingLeft:"30px",
        backgroundColor: props.status ? "green" :"white"
    }
    const blockOff = {
        width: "60px",
        height: "30px",
        paddingLeft:"30px",
        border: "1px solid black",
        backgroundColor: !props.status ? "red" :"white"
    }
    const lamp = {
        width: "50px",
        height: "50px",
        border: "1px solid black",
        borderRadius: "25px",
        backgroundColor: props.status ? "green" :"red"
    }

    return (
        <div className={classes.panel}>
            <div style={blockOn} onClick={()=>{props.onClick(true)}}>On</div>
            <div style={blockOff} onClick={()=>{props.onClick(false)}}>Off</div>
            <div style={lamp}></div>
        </div>
    )
}

export default OnOff