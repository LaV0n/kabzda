import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import According from "./According";

export default {
    title: 'According stories',
    component: According,
};

const callBack=action("according mode changing");

export const collapsed = () => <According title={"menu"} collapsed={true} onClick={callBack}/>
export const uncollapsed = () => <According title={"ussers"} collapsed={false} onClick={callBack}/>
export const changing = () => {
    const [value, setValue] = useState<boolean>(true);
    return <According title={"users"} collapsed={value} onClick={()=> setValue(!value)}/>
}

