import React from "react";
import classes from "./AuctionDetailed.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import ImageSlider from "../ImageSlider/ImageSlider";

function AuctionDetailed() {
  return (
    <div className={classes.wrapper}>
      <Accordion
        sx={{
          ".css-o4b71y-MuiAccordionSummary-content": {
            margin: 0,
          },
          ".css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes["acc-header"]}>
            <span>1</span>
            <h5>First Land with 500km square</h5>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <div className={classes.money}>First payment : 15,000 $</div>
          <div className={classes["content-wrapper"]}>
            <ImageSlider />
          </div>
          <div className={classes["block-space"]}>
            The Area is equal to 20,000 km
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AuctionDetailed;
