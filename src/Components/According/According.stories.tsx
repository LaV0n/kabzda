import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import According from "./According";

export default {
    title: 'According stories',
    component: According,
};

const callBack=action("according mode changing");
const onClickecallBack=action("some item was clicked");


export const collapsed = () => <According title={"menu"} collapsed={true} onClick={callBack} items={[]} onClicke={onClickecallBack}/>
export const uncollapsed = () => <According title={"ussers"} collapsed={false} onClick={callBack} items={[{title:'minsk', value:1},{title:'oslo', value:2},{title:'berlin', value:3}]} onClicke={onClickecallBack}/>
export const changing = () => {
    const [value, setValue] = useState<boolean>(true);
    return <According title={"users"} collapsed={value} onClick={()=> setValue(!value)} items={[{title:'minsk', value:1},{title:'oslo', value:2},{title:'berlin', value:3}]} onClicke={onClickecallBack}/>
}

