import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleDropMenu, setToggleDropMenu] = useState(false);

  const handleDropMenu = () => {
    setToggleDropMenu(!toggleDropMenu);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["toggle-btn"]}>
          <FaBars className={classes.icon} onClick={handleDropMenu} />
        </div>
        <div className={classes["nav-container"]}>
          <div className={`${classes.main} ${classes.one}`}>
            <CgProfile className={classes.icon} />
            Login
          </div>
          <div className={classes.main}>Home</div>
          <div className={classes.main}>Auctions</div>
          <div className={classes.main}>Contact US</div>
        </div>
      </div>
      {toggleDropMenu ? (
        <div className={classes.menu}>
          <div className={classes.item}>LogIn</div>

          <div className={classes.item}>Home</div>
          <div className={classes.item}>Auctions</div>
          <div className={classes.item}>Contact us</div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
