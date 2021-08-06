import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };

    const decNum = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1> { count } </h1>
            <span>
                <button onClick = { IncNum }> Increment </button>
                <button onClick = { decNum }> Decrement </button> 
            </span>
        </div>
    );
};

export default Counter;