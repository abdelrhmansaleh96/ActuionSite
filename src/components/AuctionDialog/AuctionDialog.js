import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { RiAuctionLine } from "react-icons/ri";
import classes from "./AuctionDialog.module.css";
import Stepper from "../Stepper/Stepper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AuctionDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleClose = (e) => {
    setOpen(false);
    e.stopPropagation();
  };

  return (
    <div onClick={handleClickOpen}>
      <div className={classes["open-modal"]}>
        <RiAuctionLine />
      </div>
      <Dialog
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            justifyContent: "center",
            alignItems: "center",
            width: "90vw",
            maxWidth: "500px",
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Calculator"}</DialogTitle>
        <DialogContent>
          <Stepper />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Add a bit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
