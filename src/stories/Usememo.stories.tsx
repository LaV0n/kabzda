import React, {useCallback, useMemo, useState} from "react";

export default {
    title:"useMemo"
}

/*
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
*/



export const Example3 = () =>{
    console.log('example3');

    const [counter,setCounter]=useState(0);
    const [books,setBooks]=useState(["first", "second", "third"])

    const newArray = useMemo(()=>{
        return books.filter(b=>b.toLowerCase().indexOf('i')>-1)
    },[books])

    const addBook =()=>{
        console.log("addbook")
        let copyBooks= [...books,'nixt'+new Date().getTime()];
        setBooks(copyBooks);
    }

    const addMemoizedAddBook =useMemo(() => {
        return addBook
    },[books])

    const addMemoizedAddBook2 =useCallback(addBook,[books])

    return <>
        <button onClick={()=>setCounter(counter+1)}>counter</button>
        {counter}
        <Books books={newArray} addBook={addMemoizedAddBook2}/>
    </>
}

const BooksSecret = (props: { books: Array<string> , addBook:()=>void}) => {
    console.log("books")
    return <div>
        <button onClick={props.addBook}>+++</button>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}
const Books=React.memo(BooksSecret);