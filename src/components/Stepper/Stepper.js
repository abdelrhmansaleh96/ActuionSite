import React, { useEffect, useState } from "react";
import classes from "./Stepper.module.css";
import IconButton from "@mui/material/IconButton";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Stepper = () => {
  const [bit, setBit] = useState(1000000);
  const [total, setTotal] = useState(bit + bit * 0.05);
  useEffect(() => {
    setTotal(bit + bit * 0.05);
  }, [bit]);
  return (
    <div>
      <div className={classes["plus-minus-card"]}>
        <IconButton
          onClick={() => {
            if (bit <= 1000000) {
              setBit(1000000);
            } else {
              setBit(bit - 10000);
            }
            setTotal(bit + bit * 0.05);
          }}
        >
          <BiMinus className={classes.minus} />
        </IconButton>
        <span className={classes.total}>{bit}</span>
        <IconButton
          onClick={() => {
            setBit(bit + 10000);
            setTotal(bit + bit * 0.05);
          }}
        >
          <BsPlusLg className={classes.plus} />
        </IconButton>
      </div>
      <div>{total}</div>
    </div>
  );
};

export default Stepper;
