import React, { useState } from "react";
import classes from "./FilterCards.module.css";
import { useMainContext } from "../../context/main_context";

const FilterCards = () => {
  const [active, setActive] = useState(0);
  const { handleFilter } = useMainContext();

  return (
    <div className={classes["menu-wrapper"]}>
      <span
        onClick={() => {
          setActive(1);
          handleFilter("all");
        }}
        className={
          active === 1
            ? `${classes["menu-item"]} ${classes.active}`
            : classes["menu-item"]
        }
      >
        All Auctions
      </span>
      <span
        onClick={() => {
          setActive(2);
          handleFilter("on Going");
        }}
        className={
          active === 2
            ? `${classes["menu-item"]} ${classes.active}`
            : classes["menu-item"]
        }
      >
        On Going Auctions
      </span>
      <span
        onClick={() => {
          setActive(3);
          handleFilter("coming");
        }}
        className={
          active === 3
            ? `${classes["menu-item"]} ${classes.active}`
            : classes["menu-item"]
        }
      >
        {" "}
        Coming Auctions
      </span>
      <span
        onClick={() => {
          setActive(4);
          handleFilter("finished");
        }}
        className={
          active === 4
            ? `${classes["menu-item"]} ${classes.active}`
            : classes["menu-item"]
        }
      >
        Finished
      </span>
    </div>
  );
};

export default FilterCards;
