import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./ImageSlider.module.css";

export default function ImageSlider(props) {
  const items = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      label: "NeONBRAND Digital Marketing, Las Vegas, United States",
      imgPath:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  return (
    <div className={classes.wrapper}>
      <Carousel
        sx={{
          maxWidth: "750px",
          width: "100%",
          height: "max-content",
        }}
        indicators={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "rgb(255,255,255,.5)",
            color: "black",
            padding: "0",
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
      >
        {items.map((item, i) => (
          <img
            className={classes.bg}
            key={i}
            src={item.imgPath}
            alt={item.label}
          />
        ))}
      </Carousel>
    </div>
  );
}
