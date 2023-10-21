// Componente 6 - contador com useState
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    let counter; 
    function handleClickPlus(){
        counter = count + 1
        setCount(counter)
    }
    function handleClickMinus(){
        counter = count - 1
        setCount(counter)
    }
    if(count < 0){
        setCount(10)
    }
    return(
        <div>
            <button onClick={handleClickPlus}>Add +</button>
            <button onClick={handleClickMinus}>Less -</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter