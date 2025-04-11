import { useEffect, useState } from "react"
import data from "./data"
export default function Effect() {
    const [users, setUsers] = useState([])
    const [filterdUsers, setFilterdUsers] = useState([])
    const [inputValue,setInputValue]= useState('')
    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    //     return ()=> {
    //         console.log("finshed")
    //     }
    // },[])
    
    useEffect(()=> {
        setUsers(data)
    },[])
    
    useEffect(()=> {
        setFilterdUsers(users)
    },[users])
    useEffect(()=> {
        if (users.length > 0){
            console.log(users)
        }
        
    },[users])

    useEffect(()=> {
        const filter = users.filter(
            user => user.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setFilterdUsers(filter)
    },[inputValue])

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e)=> {
        const filter = users.filter(
            user => user.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setFilterdUsers(filter)
    }
     return (
        <>
            <input type="text" className="serach" onInput={handleInput}/>
            <ul>
                {filterdUsers.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </>
    )
}
