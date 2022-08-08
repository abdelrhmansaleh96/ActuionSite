import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

const Dashboard = () => {
  // //   const [value, setValue] = React.useState(
  // //     new Date("2022-01-01T00:00:00.000Z")
  //   );
  const [value, setValue] = React.useState({
    describe: " ",
    north: " ",
    east: " ",
    west: " ",
    south: " ",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const centeringItems = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        justifyContent: "center",
        backgroundColor: "rgb(241 241 242)",
        borderRadius: "25px",
        boxShadow: "8px 10px 1px -5px rgb(0 0 0 / 42%)",
        paddingBottom: "20px",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={4}>
          <h2 className={classes.header}>Bid Name :</h2>
        </Grid>
        <Grid item xs={12} sm={8} sx={centeringItems}>
          {" "}
          <TextField id="outlined-basic" label="Bid Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2 className={classes.header}>Location :</h2>
        </Grid>
        <Grid item xs={12} sm={8} sx={centeringItems}>
          <TextField id="outlined-basic" label="Location" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <h2 className={classes.header}>Image :</h2>
        </Grid>
        <Grid item xs={12} sm={6} sx={centeringItems}>
          <TextField id="outlined-basic" label="Image URL" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} sx={centeringItems}>
          <Button variant="outlined">UPLOAD</Button>
        </Grid>
        <Accordion
          sx={{
            maxWidth: "650px",
            margin: "15px 0",
            borderRadius: "15px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1 className={classes["header"]} variant="contained">
              Bid Details
            </h1>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item sm={12} sx={centeringItems}></Grid>
              <Grid item xs={12} sm={4}>
                <h2 className={classes["sub-header"]}>Bid Description :</h2>
              </Grid>
              <Grid item xs={12} sm={8} sx={centeringItems}>
                {" "}
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  maxRows={4}
                  value={value.describe}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <h2 className={classes["sub-header"]}>Image :</h2>
              </Grid>
              <Grid item xs={12} sm={6} sx={centeringItems}>
                <TextField
                  id="outlined-basic"
                  label="Image URL"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={centeringItems}>
                <Button variant="outlined">UPLOAD</Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 className={classes["sub-header"]}>Area of the land :</h2>
              </Grid>
              <Grid item xs={12} sm={8} sx={centeringItems}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="Area"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 className={classes["sub-header"]}>Land Details :</h2>
              </Grid>
              <Grid item xs={12} sm={8} sx={centeringItems}>
                {" "}
                <TextField
                  id="outlined-multiline-flexible"
                  label="North"
                  multiline
                  maxRows={4}
                  value={value.north}
                  onChange={handleChange}
                  sx={{ margin: "0 5px" }}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="South"
                  multiline
                  maxRows={4}
                  value={value.south}
                  onChange={handleChange}
                  sx={{ margin: "0 5px" }}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="East"
                  multiline
                  maxRows={4}
                  value={value.east}
                  onChange={handleChange}
                  sx={{ margin: "0 5px" }}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="West"
                  multiline
                  maxRows={4}
                  value={value.west}
                  onChange={handleChange}
                  sx={{ margin: "0 5px" }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontSize: "24px",
              borderRadius: "33px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
