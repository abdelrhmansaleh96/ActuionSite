import React, { useState } from "react";
import classes from "./CardDetailed.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardImg from "../../assets/card.jpg";
import CardImg2 from "../../assets/image.jfif";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const CardDetailed = () => {
  const [active, setActive] = useState({
    one: true,
    two: false,
  });

  const buttonHandler = (key) => {
    if (key === "0") {
      setActive({
        one: true,
        two: false,
      });
    } else {
      setActive({
        one: false,
        two: true,
      });
    }
  };
  return (
    <div className={classes.center}>
      <div className={classes.wrapper}>
        <div className={classes["img-actions"]}>
          <div
            onClick={() => {
              buttonHandler("0");
            }}
            className={
              active.one ? `${classes.btn} ${classes.active}` : classes.btn
            }
          >
            <div>Photos</div>
            <div>
              <PhotoLibraryOutlinedIcon
                sx={{
                  fontSize: "21px",
                }}
              />
            </div>
          </div>
          <div
            onClick={() => {
              buttonHandler("1");
            }}
            className={
              active.two ? `${classes.btn} ${classes.active}` : classes.btn
            }
          >
            <div>Location</div>
            <div>
              <MapOutlinedIcon
                sx={{
                  fontSize: "21px",
                }}
              />
            </div>
          </div>
        </div>
        <Card sx={{ maxWidth: 700, borderRadius: "20px" }}>
          <CardMedia
            component="img"
            height="300"
            image={active.one ? CardImg : CardImg2}
            alt="auction"
          />
          <CardContent>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "400",
                color: "black",
                marginTop: "20px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias magnam dolore provident fugit aut porro reprehenderit amet
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardDetailed;
