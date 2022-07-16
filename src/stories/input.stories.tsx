import React, {useRef, useState} from 'react';


export default  {
  title: 'input',
  //component:OnOff
}


export const UncontrolledInput = ()=> <input/>;
export const ControlledInput = ()=> <input value={"tyt.by"}/>
export  const TrackingValue = () => {
  let [value, setValue]=useState('');
  return <><input onChange={ (e)=>{
  setValue(e.currentTarget.value)}
  }/> -{value}</>
}
export const getValueByButton = () =>{
  let [value, setValue]=useState('');
  let inputRef = useRef<HTMLInputElement>(null);
  const saveButton =()=>{
    const el= inputRef.current as HTMLInputElement;
    setValue(el.value);
  }
  return (
      <><input ref={inputRef}/><button onClick={saveButton}>save</button> -value bu button: {value}</>
  )
}



