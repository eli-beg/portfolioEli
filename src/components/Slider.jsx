import React, { useCallback, useState, useEffect } from "react";
import NextIcon from "./NextIcon";
import { Box, Slide } from "@mui/material";

const Slider = ({ items, handleOpenDetails, category }) => {
  const [itemsToRender, setItemsToRender] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState(null);

  const getItemsArray = useCallback(() => {
    const itemsGroup = items.slice(currentIndex, currentIndex + 1);
    setItemsToRender(itemsGroup);
  }, [currentIndex, items]);

  useEffect(() => {
    getItemsArray();
  }, [getItemsArray]);

  const navigateNext = (direction) => {
    const oppDirection = direction === "right" ? "left" : "right";
    setDirection(direction);
    setSlideIn(false);

    setCurrentIndex((prevState) => {
      const nextState = prevState + 1;
      if (nextState >= items.length) {
        return prevState;
      }

      return nextState;
    });
    setTimeout(() => {
      setDirection(oppDirection);
      setSlideIn(true);
    }, 1000);
  };

  const navigatePreviuos = (direction) => {
    const oppDirection = direction === "left" ? "right" : "left";
    setDirection(direction);
    setSlideIn(false);
    setCurrentIndex((prevState) => {
      const previuosState = prevState - 1;
      if (previuosState < 0) {
        return 0;
      }
      return previuosState;
    });

    setTimeout(() => {
      setDirection(oppDirection);
      setSlideIn(true);
    }, 1000);
  };
  console.log("hello", itemsToRender);
  return (
    <Box sx={styles.sliderContainer}>
      <Box sx={styles.iconContainer}>
        {currentIndex !== 0 ? (
          <NextIcon
            direction="left"
            navigatePreviuos={() => navigatePreviuos("left")}
          />
        ) : null}
      </Box>
      <Slide in={slideIn} direction={direction}>
        <Box
          width="500px"
          height="500px"
          sx={{
            // backgroundColor: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="img not found"
            src={itemsToRender}
            sx={{ width: "480px", maxHeight: "600px" }}
          />
        </Box>

        {/* {itemsToRender?.map((item) => (
            <MainCard
              item={item}
              handleOpenDetails={handleOpenDetails}
              category={category}
            />
          ))} */}
      </Slide>

      <Box sx={styles.iconContainer}>
        {currentIndex < items.length ? (
          <NextIcon
            direction="right"
            navigateNext={() => {
              navigateNext("right");
            }}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Slider;

const styles = {
  sliderContainer: {
    height: "600px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: { xs: "-10px" },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    width: { xs: "20px", md: "60px" },
  },
};
