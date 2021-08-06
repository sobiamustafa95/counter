import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { blue } from "@material-ui/core/colors";


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
                <button onClick = { IncNum }> 
                    <AddIcon style = {{ background: blue[800] }} /> 
                </button>
                <button onClick = { decNum }> 
                    <RemoveIcon style = {{ background: blue[800] }} /> 
                </button> 
            </span>
        </div>
    );
};

export default Counter;