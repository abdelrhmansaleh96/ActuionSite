import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./ContactUs.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ContactUs = () => {
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={4}
        >
          {" "}
          <TextField
            fullWidth
            id="filled-basic"
            label="Name"
            variant="filled"
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={4}
        >
          {" "}
          <TextField
            fullWidth
            id="filled-basic"
            label="Mobile Number"
            variant="filled"
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={4}
        >
          {" "}
          <TextField
            fullWidth
            id="filled-basic"
            label="EMAIL"
            variant="filled"
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          {" "}
          <TextField
            id="filled-basic"
            label="The Institution"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          {" "}
          <TextField
            id="filled-basic"
            label="Subject"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          {" "}
          <TextField
            id="filled-multiline-static"
            label="Your Question"
            multiline
            rows={4}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          {" "}
          <Button
            variant="contained"
            sx={{ fontSize: "21px", color: "white" }}
            fullWidth
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
