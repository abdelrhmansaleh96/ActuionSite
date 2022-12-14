import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./ContactUs.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const ContactUs = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
      
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
      
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
      <Grid
        container
        spacing={3}
        sx={{
          ".css-1eyvwuq-MuiInputBase-root-MuiFilledInput-root": {
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
          },
          ".css-2ttwrs-MuiInputBase-root-MuiFilledInput-root": {
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
          },
        }}
      >
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
            sx={{
              fontSize: "21px",
              color: "white",
              backgroundColor: "rgb(34 148 72)",
              borderRadius: "15px",
            }}
            fullWidth
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ContactUs;
