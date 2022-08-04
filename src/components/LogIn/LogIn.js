import React, { useState } from "react";
import classes from "./LogIn.module.css";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BsFillPersonFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

const LogIn = () => {
  const [values, setValues] = useState({
    password: "",

    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <div className={classes["grid-container"]}>
        <div className={classes.form}>
          <BsFillPersonFill className={classes.icon} />
          <h2 className={classes.title}>LOG IN</h2>
          <p className={classes.words}>Enter your user name and password</p>

          <FormControl
            sx={{
              width: "75%",
              marginBottom: "24px",
              maxWidth: "450px",
              height: "53px",
              m: 1,
            }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-username">
              User Name
            </InputLabel>
            <Input
              id="standard-user"
              endAdornment={
                <InputAdornment position="start">
                  {
                    <AccountCircle
                      fontSize="large"
                      sx={{ marginBottom: "3px" }}
                    />
                  }
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            sx={{
              width: "75%",
              marginBottom: "24px",
              maxWidth: "450px",
              height: "53px",
              m: 1,
            }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <VisibilityOff
                        fontSize="large"
                        sx={{ marginBottom: "3px" }}
                      />
                    ) : (
                      <Visibility
                        fontSize="large"
                        sx={{ marginBottom: "3px" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <h6 className={classes.forget}>Forget your password ?</h6>
          </FormControl>

          <Button
            variant="outlined"
            sx={{
              fontSize: "20px",
              paddingLeft: "35px",
              paddingRight: "35px",
              marginTop: "56px",
              border: "1px solid rgb(95, 178, 136)",
              borderRadius: "33px",
            }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "14px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginTop: "16px",
              marginBottom: "10px",
              border: "1px solid rgb(95, 178, 136)",
              borderRadius: "22px",
            }}
          >
            Register
          </Button>
        </div>

        <div className={classes.info}></div>
      </div>
    </div>
  );
};

export default LogIn;
