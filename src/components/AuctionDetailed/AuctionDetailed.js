import React, { useState } from "react";
import classes from "./AuctionDetailed.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";
import ImageSlider from "../ImageSlider/ImageSlider";

function AuctionDetailed() {
  const [expandedIcon, setExpandedIcon] = useState(false);
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
          ".css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root": {
            marginLeft: "17px",
          },
        }}
      >
        <AccordionSummary
          onClick={() => {
            setExpandedIcon(!expandedIcon);
          }}
          expandIcon={
            expandedIcon ? (
              <div className={classes["icon-wrapper"]}>
                <ExpandMoreIcon />
              </div>
            ) : (
              <div>
                <AddIcon className={classes["icon-wrapper"]} />
              </div>
            )
          }
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

          <div className={classes["small-card-container"]}>
            <div className={classes["small-card"]}>
              <div className={classes["direction-icon"]}>icon</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
            <div className={classes["small-card"]}>
              <div className={classes["direction-icon"]}>icon</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
            <div className={classes["small-card"]}>
              <div className={classes["direction-icon"]}>icon</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
            <div className={classes["small-card"]}>
              <div className={classes["direction-icon"]}>icon</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
          </div>
          <div className={classes["block-space"]}>
            The Area is equal to 20,000 km
          </div>
        </AccordionDetails>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className={classes.title}>Location and Land</h5>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes["small-acc"]}>
                <div className={classes.address}>
                  <p>land:</p>
                  <p>land:</p>
                  <p>land:</p>
                  <p>land:</p>
                </div>
                <div className={classes.detail}>
                  <p>New Cairo</p>
                  <p>New Cairo</p>
                  <p>New Cairo</p>
                  <p>New Cairo</p>
                </div>
              </div>
              <Divider />
            </AccordionDetails>
          </Accordion>
        </div>
      </Accordion>
    </div>
  );
}

export default AuctionDetailed;
