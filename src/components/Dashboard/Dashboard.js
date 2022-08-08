import React from "react";
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
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Formik, Form, Field, FieldArray } from "formik";

const Dashboard = () => {
  // //   const [value, setValue] = React.useState(
  // //     new Date("2022-01-01T00:00:00.000Z")
  //   );

  // const formik = useFormik({
  //   initialValues: {
  //     bidName: "",
  //     location: 0,
  //     imageUrl: "",
  //     details: [emptyDetails],
  //   },
  //   onSubmit: (values) => {
  //     console.log("my values", values);
  //   },
  // });
  const [value, setValue] = React.useState({
    describe: " ",
    north: " ",
    east: " ",
    west: " ",
    south: " ",
  });

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

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
      <Formik
        initialValues={{
          bidName: "",
          location: 0,
          imageUrl: "",
          details: [
            {
              description: " ",
              image: " ",
              area: " ",
              north: " ",
              east: " ",
              west: " ",
              south: " ",
            },
          ],
        }}
        onSubmit={(values) => {
          console.log("onSubmit", JSON.stringify(values, null, 2));
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form >
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
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Bid Name"
                  variant="outlined"
                  name="bidName"
                  value={values.bidName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 className={classes.header}>Location :</h2>
              </Grid>
              <Grid item xs={12} sm={8} sx={centeringItems}>
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <h2 className={classes.header}>Image :</h2>
              </Grid>
              <Grid item xs={12} sm={6} sx={centeringItems}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Image URL"
                  variant="outlined"
                  name="imageUrl"
                  value={values.imageUrl}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={centeringItems}>
                <Button variant="outlined">UPLOAD</Button>
              </Grid>
              <FieldArray name="details">
                {({ push, remove }) => (
                  <div>
                    {values.details.map((detail, index) => {
                      const describe = `details[${index}].description`;
                      const area = `details[${index}].area`;
                      const image = `details[${index}].lastName`;
                      const east = `details[${index}].east`;
                      const west = `details[${index}].west`;
                      const north = `details[${index}].north`;
                      const south = `details[${index}].south`;
                      return (
                        <Accordion
                          key={index * Math.random()}
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
                            <h1
                              className={classes["header"]}
                              variant="contained"
                            >
                              Bid Details
                            </h1>
                            <Button
                              className={classes.button}
                              margin="normal"
                              type="button"
                              color="secondary"
                              variant="outlined"
                              onClick={() => remove(index)}
                            >
                              x
                            </Button>
                          </AccordionSummary>
                          <Divider />
                          <AccordionDetails>
                            <Grid container spacing={2}>
                              <Grid item sm={12} sx={centeringItems}></Grid>
                              <Grid item xs={12} sm={4}>
                                <h2 className={classes["sub-header"]}>
                                  Bid Description :
                                </h2>
                              </Grid>
                              <Grid item xs={12} sm={8} sx={centeringItems}>
                                {" "}
                                <TextField
                                  id="outlined-multiline-flexible"
                                  label="Description"
                                  name={describe}
                                  multiline
                                  maxRows={4}
                                  value={detail.describe}
                                  onChange={handleChange}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <h2 className={classes["sub-header"]}>
                                  Image :
                                </h2>
                              </Grid>
                              <Grid item xs={12} sm={6} sx={centeringItems}>
                                <TextField
                                  id="outlined-basic"
                                  label="Image URL"
                                  name="imageURL"
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item xs={12} sm={6} sx={centeringItems}>
                                <Button variant="outlined">UPLOAD</Button>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                <h2 className={classes["sub-header"]}>
                                  Area of the land :
                                </h2>
                              </Grid>
                              <Grid item xs={12} sm={8} sx={centeringItems}>
                                {" "}
                                <TextField
                                  id="outlined-basic"
                                  label="Area"
                                  name={area}
                                  variant="outlined"
                                  onChange={handleChange}
                                  value={detail.area}
                                />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                <h2 className={classes["sub-header"]}>
                                  Land Details :
                                </h2>
                              </Grid>
                              <Grid item xs={12} sm={8} sx={centeringItems}>
                                {" "}
                                <TextField
                                  id="outlined-multiline-flexible"
                                  label="North"
                                  name={north}
                                  multiline
                                  maxRows={4}
                                  value={detail.north}
                                  onChange={handleChange}
                                  sx={{ margin: "0 5px" }}
                                />
                                <TextField
                                  id="outlined-multiline-flexible"
                                  label="South"
                                  name={south}
                                  multiline
                                  maxRows={4}
                                  value={detail.south}
                                  onChange={handleChange}
                                  sx={{ margin: "0 5px" }}
                                />
                                <TextField
                                  id="outlined-multiline-flexible"
                                  label="East"
                                  name={east}
                                  multiline
                                  maxRows={4}
                                  value={detail.east}
                                  onChange={handleChange}
                                  sx={{ margin: "0 5px" }}
                                />
                                <TextField
                                  id="outlined-multiline-flexible"
                                  label="West"
                                  name={west}
                                  multiline
                                  maxRows={4}
                                  value={detail.west}
                                  onChange={handleChange}
                                  sx={{ margin: "0 5px" }}
                                />
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                    <Button
                      className={classes.button}
                      type="button"
                      variant="outlined"
                      onClick={() =>
                        push({
                          id: Math.random(),
                          description: " ",
                          image: " ",
                          area: " ",
                          north: " ",
                          east: " ",
                          west: " ",
                          south: " ",
                        })
                      }
                    >
                      Add
                    </Button>
                  </div>
                )}
              </FieldArray>
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
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Dashboard;
