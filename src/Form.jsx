import { useState } from "react"

export default function Form ({inputName,inputLabel,children}) {
    const [name, setName]= useState('')
    const [age, setAge] = useState(0)
    function handleChangeName (e) {
        setName(e.target.value)
    }
    function handleChangeAge (e) {
        setAge(e.target.value)
    }
    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
        }}> 
        <input type="text" placeholder="Name" value={name} onChange={(e)=> {handleChangeName(e)}}/>
        <div> {setName} </div>
        <input type="number" placeholder="Age" onChange={(e) => {handleChangeAge(e)}} value={age}/>
        <div> {setAge} </div>
        <input type="submit" value="Submit" onClick={()=> {console.log({age,name})}}/>
        </form>
    </>)
}