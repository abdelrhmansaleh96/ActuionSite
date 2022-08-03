import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${classes.parent} ${classes.bg}`}>
      <div className={classes.grid}>
        <div className={classes.item}>item1</div>
        <div className={classes.item}>item2</div>
        <div className={classes.item}>item3</div>
        <div className={classes.item}>item4</div>
      </div>
      <div className={classes.row}>
        <div className={classes.item}>info1</div>
        <div className={classes.item}>info2</div>
      </div>
      <div className={classes.center}>copy rights</div>
    </div>
  );
};

export default Footer;
