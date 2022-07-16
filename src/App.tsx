import React, {useState} from 'react';
import './App.css';
import According from "./Components/According/According";
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccording from "./Components/UnControlledAccording/UnControlledAccording";
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating';

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return (
        <h3>
            {props.title}
        </h3>
    )
}

function App() {

    let [retingValue,setRetingValue] = useState<RatingValueType>(0)
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    let [status,setStatus] = useState(false);

    return (
        <div className="App">
            <PageTitle title="This app"/>
            <PageTitle title="just for testing"/>
            Article 1
            <Rating value={retingValue} onClick ={setRetingValue}/>
            <According title="Menu"
                       collapsed={collapsedAccordion}
                       onClick ={()=>setCollapsedAccordion(!collapsedAccordion)}
            items={[]}
            onClicke={()=>{}}/>
           {/* <According title="Bar" collapsed={false}/>*/}
            Article 2
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <UncontrolledRating/>
            <OnOff status ={status} onClick = {setStatus}/>
            <UnControlledAccording title={'Tips'}/>
            <UnControlledAccording title={'Lists'}/>
        </div>
    );
}

export default App;
