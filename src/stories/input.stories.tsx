import React, {ChangeEvent, useRef, useState} from 'react';


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

export const ConrtolledInput = () =>{
  let [value, setValue]=useState('');
  const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value);
  }
  return (
      <input onChange={onChange} value={value}/>
  )
}

export const ConrtolledCheckbox = () =>{
  let [value, setValue]=useState(true);
  const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.checked);
  }
  return (
      <input type ="checkbox" onChange={onChange} checked={value}/>
  )
}

export const ConrtolledSelect = () =>{
  let [value, setValue]=useState<string | undefined>('3');
  const onChange =(e:ChangeEvent<HTMLSelectElement>)=>{
    setValue(e.currentTarget.value);
  }
  return (
      <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Warsaw</option>
        <option value={'3'}>Berlin</option>
        </select>
  )
}
