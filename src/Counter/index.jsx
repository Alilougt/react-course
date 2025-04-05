import { useState } from "react";


export default function Counter({initialValue, step}) {

    const  [count,setCounter] = useState(initialValue)

    return <div>
        <button onClick={() => {
            return setCounter(count + step)
        }}>Increment </button>
        <button onClick={() => {
            return setCounter(0)
        }}>Rest </button>
        <span>counter: {count} </span>
    </div>
}