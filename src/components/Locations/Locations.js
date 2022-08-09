import { MapContainer } from "react-leaflet/MapContainer";
import React, { useState, useEffect } from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup } from "react-leaflet";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "./Map.module.css";
import NewMarker from "./Marker";

const Locations = () => {
  const [location, setLocation] = useState([23.8859, 45.0792]);
  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setLabel(event.target.value);
    setLocation(
      event.target.value.split("-").map((item) => parseInt(item, 10))
    );
    // setCenter(location);
  };
  // const [selectValue, setSelectValue] = useState("23.8859-45.0792");
  // const [location, setLocation] = useState([23.8859, 45.0792]);
  let [center, setCenter] = useState(location);

  useEffect(() => {
    setCenter(location);
  }, [location]);
  return (
    <MapContainer center={center} zoom={4} scrollWheelZoom={false}>
      <div className={classes["select-menu"]}>
        <FormControl sx={{ width: "200px", zIndex: "1000000" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Locations</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // there is a problem here

            defaultValue={"23.8859-45.0792"}
            value={label}
            label="location"
            onChange={handleChange}
          >
            {/* <MenuItem value={"23.8859-45.0792"}>Location one</MenuItem> */}
            <MenuItem value={"23.8859-45.0792"}>Location one</MenuItem>
            <MenuItem value={"22-24"}>Location two</MenuItem>
            <MenuItem value={"75-75"}>Location three</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <NewMarker center={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </NewMarker>
    </MapContainer>
  );
};

export default Locations;
