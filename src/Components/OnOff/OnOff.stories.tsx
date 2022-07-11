import React, {useState} from 'react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'On Off stories',
    component: OnOff,
};

const callBack=action("on or off clicked");

export const onMode = () => <OnOff status={true} onClick={callBack}/>
export const offMode = () => <OnOff status={false} onClick={callBack}/>
export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <OnOff status={value} onClick={setValue}/>
}

