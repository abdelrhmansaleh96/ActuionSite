import React, { useState } from "react";
import classes from "./LogIn.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BsFillPersonFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";

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
      <div className={classes.form}>
        <BsFillPersonFill />
        <h2>LOG IN</h2>
        <p>Enter your user name and password</p>
        <TextField
          color="primary"
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          sx={{ marginBottom: "10px", width: "250px" }}
        />

        <FormControl variant="outlined">
          <InputLabel color="primary" htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            color="primary"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  color="primary"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className={classes.info}></div>
    </div>
  );
};

export default LogIn;
