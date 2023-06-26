import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1> {count} </h1>
        <div className="wrapper">
          <span className="btn">
            <Tooltip title="increment">
              <Button variant="contained" onClick={IncNum} className="inc-btn">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="decrement">
              <Button variant="contained" onClick={decNum} className="dec-btn">
                <RemoveIcon />
              </Button>
            </Tooltip>
          </span>
        </div>
      </div>
    </>
  );
};

export default Counter;
