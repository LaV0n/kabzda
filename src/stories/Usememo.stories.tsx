import React, {useMemo, useState} from "react";

export default {
    title:"useMemo"
}

export const Example1 = () => {
    const [a,setA]=useState<number>(3)
    const [b,setB]=useState<number>(3)

    let resultA =1;
    let resultB =1;

    resultA = useMemo(()=>{
        let tempResultA=1;
        for (let i=1; i<=a ; i++){
            let fake=0;
            while (fake<10000000){
                fake++;
                const fakeValue=Math.random();
            }

            tempResultA*=i;
        }
        return tempResultA;
    },[a])

    for (let i=1; i<=b ; i++){
        resultB*=i;
    }

    return <>
    <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
    <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
    <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>

    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users")
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}
const Users=React.memo(UsersSecret);

export const Example2 = () =>{
    console.log('example2');
    const [counter,setCounter]=useState(0);
    const [users,setUsers]=useState(["first", "second", "third"])

    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('i')>-1)
    },[users])

    const addUser =()=>{
        let copyUsers= [...users,'nixt'+new Date().getTime()];
        setUsers(copyUsers);
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={users}/>
    </>
}
