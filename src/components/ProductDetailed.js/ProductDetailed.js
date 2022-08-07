import React from "react";
import classes from "./ProductDetailed.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Countdown from "react-countdown";
import CardDetailed from "../CardDetailed/CardDetailed";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AuctionDetailed from "../AuctionDetailed/AuctionDetailed";

const ProductDetailed = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.title}>First Auction </h1>
        <div className={classes["badges-container"]}>
          <ShareOutlinedIcon className={classes.icon} />
          <StarBorderOutlinedIcon className={classes.icon} />
        </div>
        <span className={classes.address}>Location-Details</span>
        <span className={classes["first-info"]}>Time</span>
        <span className={classes["second-info"]}>Coming</span>
      </div>
      <div className={classes.timer}>
        <div className={classes.start}>Starts in</div>
        <div className={classes.countdown}>
          <div className={classes["countdown-title"]}>
            <div className={classes.item}>Seconds</div>
            <div className={classes.item}>Minutes</div>
            <div className={classes.item}>Hour</div>
            <div className={classes.item}>Day</div>
          </div>
          <Countdown date={Date.now() + 1000000} />
        </div>
      </div>
      <CardDetailed />
      <div className={classes["auction-detailed"]}>
        <div className={classes["details-title"]}>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: "17px",
              marginRight: "5px",
            }}
            className={classes["details-title-icon"]}
          />
          Auction Details <span>no:5</span>
        </div>
        <div className={classes["auction-detailed-container"]}>
          <AuctionDetailed />
          <AuctionDetailed />
          <AuctionDetailed />
          <AuctionDetailed />
        </div>
      </div>
      <div className={classes["content-wrapper"]}></div>
      <div className={classes["content-wrapper"]}></div>
      <div className={classes["content-wrapper"]}></div>
    </div>
  );
};

export default ProductDetailed;
