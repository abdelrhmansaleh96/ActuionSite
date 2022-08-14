import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logoHandler = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img onClick={logoHandler} src={logo} alt="logo" />
        </div>
        <div className={classes["toggle-btn"]}>
          <Sidebar />
        </div>
        <div className={classes["nav-container"]}>
          <div className={`${classes.main} ${classes.one}`}>
            <Link to="/login">
              <CgProfile className={classes.icon} />
              Login
            </Link>
          </div>

          <div className={classes.main}>
            <Link to="/home">Home </Link>
          </div>

          <div className={classes.main}>
            {" "}
            <Link to="/home">Auctions</Link>
          </div>

          <div className={classes.main}>
            <Link to="/contactus">Contact US</Link>
          </div>
        </div>
      </div>
      {/* {toggleDropMenu ? (
        <div className={classes.menu}>
          <div className={classes.item}>LogIn</div>

          <div className={classes.item}>Home</div>
          <div className={classes.item}>Auctions</div>
          <div className={classes.item}>Contact us</div>
        </div>
      ) : null} */}
    </>
  );
};

export default Navbar;
