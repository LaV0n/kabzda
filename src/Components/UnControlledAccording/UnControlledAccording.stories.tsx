import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import UnControlledAccording from "./UnControlledAccording";



export default {
    title: 'UnControlledAccording stories',
    component: UnControlledAccording,
};

const callBack=action("on or off clicked");

export const collapsed = () => <UnControlledAccording title={"menu"}/>
export const uncollapsed = () => <UnControlledAccording title={"users"}/>
export const Changing = () => {
    const [value, setValue] = useState(true);
    return <UnControlledAccording title={"users"}/>
}

