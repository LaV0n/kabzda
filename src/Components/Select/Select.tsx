import React from "react";



type ItemType = {
    title:string
    value:any
}

export type SelectType ={
    value:any
    onChange:(value:any) => void
    items:ItemType[]
}
function Select (props:SelectType) {
    return (
        <div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )

}