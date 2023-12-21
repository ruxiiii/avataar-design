import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Theme } from "@emotion/react";

const useStyles = makeStyles((theme: Theme) => ({
  frame: {
    width: "100wv",
    position: "relative",
    height: "50vH",
    top: "10%",
  },

  overlap: {
    height: "522px",
    // left: "44px",
    position: "absolute",
    overflow: "hidden",
    top: "19px",
    width: "100%",
  },

  // group: {
  //   height: "174px",
  //   left: "0",
  //   position: "absolute",
  //   top: "175px",
  //   width: "1639px",
  // },

  // carouselBox: {
  //   display: "flex",
  //   flexDirection: "row",
  // },

  container: {
    display: "flex",
    width: "2080px",
  },

  image: {
    borderRadius: "8px",
    gap: "4px",
    width: "600px",
  },
  hoverImage: {},

  nonActiveOpacity: {
    opacity: 1,
    transition: "all 500ms ease-in-out",
    //transform: "scale(1)",
  },
  activeOpacity: {
    opacity: 1,
    transition: "easeout 500ms ease-in-out",
    position: "relative",
    height: "320px",
    // width: "50px",
    borderRadius: "8px",
    transform: "scale(1.2)",
    marginRight: "-28px",
    marginLeft: "-28px",
    zIndex: "5",
    objectFit: "cover",
    cursor: "pointer",
    alignSelf: "stretch",
  },

  imageText: {},

  nearImages: {
    width: "500px",
    height: "280px",
    zIndex: "4",
    marginTop: "20px",
    marginRight: "-15px",
    // flexShrink: 0,
  },

  farImages: {
    width: "400px",
    height: "200px",
    zIndex: "1",
    marginTop: "60px",
    // flexShrink: 0,
  },
}));

export const carouselImages = [
  {
    img: "https://cdn.pixabay.com/photo/2023/12/17/04/16/ai-generated-8453547_1280.jpg",
    title: "Road Not Taken",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/12/11/18/59/church-8444287_1280.jpg",
    title: "Palace",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/12/15/17/58/sunflower-8451238_1280.jpg",
    title: "Sunflower",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/12/12/19/08/moutains-8445768_1280.jpg",
    title: "Scenic Mountains",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/12/17/14/56/ai-generated-8454340_1280.jpg",
    title: "Christmas House",
  },
];

interface CarouselImage {
  img: string;
  title: string;
}

interface CarouselProps {
  carouselImages: CarouselImage[];
}

export const Carousel1: React.FC<CarouselProps> = ({ carouselImages }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length: number = carouselImages.length;

  const nextPhoto = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevPhoto = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  // useEffect(() => {
  //   // Function to move to the next photo
  //   const moveToNextPhoto = () => {
  //     setCurrentIndex((prevPhoto) => (prevPhoto + 1) % length);
  //   };
  //   const startAutoSlide = () => {
  //     return setTimeout(() => {
  //       moveToNextPhoto(); // Corrected the function name here
  //       startAutoSlide(); // Call the function recursively to create a loop
  //     }, 3000); // Adjust the delay (3000 milliseconds) as needed
  //   };

  //   // Start the automatic slide when the component mounts
  //   const timerId = startAutoSlide();

  //   // Clear the timer when the component unmounts or when the dependencies change
  //   return () => clearTimeout(timerId);
  // }, [length]);

  const classes = useStyles();
  return (
    <div className={classes.frame}>
      <div className={classes.overlap}>
        {/* <div className={classes.carouselBox}> */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? classes.nonActiveOpacity
                : classes.nonActiveOpacity
            }
          >
            <div key={index} className={classes.container}>
              {index === currentIndex && (
                <>
                  {[...Array(5).keys()].map((i) => (
                    <div
                      key={i}
                      className={`${classes.image} ${classes.hoverImage}`}
                    >
                      <img
                        src={
                          carouselImages[(length + index - 2 + i) % length].img
                        }
                        alt={`Image ${(length + index - 2 + i) % length}`}
                        onClick={() =>
                          setCurrentIndex((length + index - 2 + i) % length)
                        }
                        className={`${classes.image} ${
                          i === 2
                            ? classes.activeOpacity
                            : i % 2 === 0
                            ? classes.nonActiveOpacity + " " + classes.farImages
                            : classes.nonActiveOpacity +
                              " " +
                              classes.nearImages
                        }`}
                      />
                      <div className={classes.imageText}>
                        {
                          carouselImages[(length + index - 2 + i) % length]
                            .title
                        }
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Carousel1;
