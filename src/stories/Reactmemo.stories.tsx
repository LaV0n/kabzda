import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessageCounterSecret = (props: { count: number }) => {
    console.log("counter")
    return <div>{props.count}</div>
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
const NewMessageCounter=React.memo(NewMessageCounterSecret);

/*
export const example = () => {
    const [counter,setCounter]=useState(0);
    const [users,setUsers]=useState(["first", "second", "third"])
    const addUser =()=>{
        let copyUsers= [...users,'next'+new Date().getTime()];
        setUsers(copyUsers)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}*/
