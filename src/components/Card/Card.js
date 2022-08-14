import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardImg from "../../assets/card.jpg";
import classes from "./Card.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CardLogo from "../../assets/card-logo.jpg";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main_context";
import { Container } from "@mui/material";
import FilterCards from "../FilterCards/FilterCards";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "react-countdown";
import { CircleLoader } from "react-spinners";

export default function MultiActionAreaCard() {
  const { filteredData, loading } = useMainContext();

  return (
    <Container>
      <FilterCards />
      <div className={classes.loader}>
        <CircleLoader loading={loading} size={450} color="#5FB288" />
      </div>
      <div className={classes.center}>
        {!loading && (
          <AnimatePresence>
            {filteredData.map((auction, index) => {
              return (
                <Link to="/singleauction" key={index}>
                  <motion.div
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={classes.wrapper}
                  >
                    <div className={classes.money}>Details here</div>
                    <div
                      className={
                        auction.status === "on Going"
                          ? `${classes.type} ${classes.green}`
                          : auction.status === "coming"
                          ? `${classes.type} ${classes.blue}`
                          : classes.type
                      }
                    >
                      {auction.status}
                    </div>
                    <div className={classes["badges-container"]}>
                      <StarBorderOutlinedIcon />
                      <ShareOutlinedIcon />
                    </div>
                    <div className={classes["card-logo-container"]}>
                      <img
                        className={classes.image}
                        src={CardLogo}
                        alt="container-logo"
                      />
                    </div>
                    <div className={classes["location-container"]}>
                      <div className={classes["location-name"]}>
                        {auction.location}
                      </div>
                      <div className={classes["location"]}>
                        <LocationOnIcon />
                      </div>
                    </div>
                    <Card
                      sx={{ maxWidth: 500, borderRadius: "22px" }}
                      style={{
                        padding: 0,
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="300"
                          image={CardImg}
                          alt="auction 1"
                        />
                        <CardContent
                          sx={{
                            margin: "0px",
                            padding: "0px",
                          }}
                        >
                          <div className={classes.grid}>
                            <div className={classes.item1}>
                              <header
                                className={
                                  auction.status === "coming"
                                    ? classes.time
                                    : auction.status === "on Going"
                                    ? `${classes.greenTxt} ${classes.time}`
                                    : `${classes.grayTxt} ${classes.time}`
                                }
                              >
                                {auction.status === "coming" ? (
                                  <Countdown date={Date.now() + 10000000} />
                                ) : auction.status === "on Going" ? (
                                  "on Going"
                                ) : (
                                  "Finished"
                                )}
                              </header>
                              <div className={classes["time-info"]}>
                                <section>Details inside</section>
                                <div>{auction.details}</div>
                              </div>
                            </div>
                            <div className={classes.item1}>
                              <div className={classes.date}>Sunday</div>
                              <div className={classes.date}>01/9/2020</div>
                              <div className={classes.date}>02/8/2022</div>
                              <div>07:00 pm</div>
                            </div>
                            <div className={classes.item2}>
                              <div className={classes["icon-container"]}>
                                <AppSettingsAltOutlinedIcon fontSize="small" />
                              </div>
                              my time
                            </div>
                            <div className={classes["small-grid"]}>
                              <div className={classes["small-grid-item"]}>
                                <div className={classes.badge}>
                                  <AppSettingsAltOutlinedIcon fontSize="small" />
                                </div>
                                <section>{auction.productsNumber}</section>
                                <div>Products</div>
                              </div>
                              <div className={classes["small-grid-item"]}>
                                <div className={classes.badge2}>
                                  <AppSettingsAltOutlinedIcon fontSize="small" />
                                </div>

                                <section>4</section>
                                <div>Days</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </CardActionArea>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          sx={{ color: "white" }}
                        >
                          Details
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </Container>
  );
}
