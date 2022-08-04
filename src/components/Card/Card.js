import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardImg from "../../assets/card.jpg";
import classes from "./Card.module.css";

export default function MultiActionAreaCard() {
  return (
    <div className={classes.center}>
      <Card sx={{ maxWidth: 400, borderRadius: "16px" }}>
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
                <header className={classes.time}>Time remaining</header>
                <div className={classes["time-info"]}>
                  <section>Details inside</section>
                  <div>First payment</div>
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
                  <section>16</section>
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
    </div>
  );
}
