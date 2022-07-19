import React, {useState, KeyboardEvent, useEffect} from "react";
import classes from "./Select.module.css";

type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

function Select(props: SelectType) {

    const [activ, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toogleItems = () => {
        setActive(!activ)
    }
    const onClickItem = (value: any) => {
        props.onChange(value);
        toogleItems();
    }

    useEffect(() => {
            setHoveredElementValue(props.value);
        },  [ props.value ] );

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key ==="ArrowDown" ? props.items[i+1] :props.items[i-1];
                    if (pretendentElement) {
                        setHoveredElementValue(pretendentElement.value)
                        break;
                    }
                }
            }
        }
        if (e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }

    return (
        <>
            <div className={classes.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}
            >
                <h3 onClick={toogleItems}>{selectItem && selectItem.title}</h3>
                {activ &&
                    <div className={classes.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => {
                                    setHoveredElementValue(i.value)
                                }}
                                className={classes.item + " " + (hoveredItem === i ? classes.selected : '')}
                                key={i.value}
                                onClick={() => onClickItem(i.value)}
                            >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}

export default Select