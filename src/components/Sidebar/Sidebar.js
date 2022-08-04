import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (left, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <Box sx={{ width: "150px" }}>
      <List>
        {["Home", "Auctions", "Contact Us", "Sign in"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                fontSize: "24px",
                "&:hover": {
                  color: "green",
                },
              }}
            >
              <h5>{text}</h5>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button
          sx={{
            fontSize: "32px",
            color: "#333",
          }}
          onClick={toggleDrawer("left", true)}
        >
          <FaBars />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
