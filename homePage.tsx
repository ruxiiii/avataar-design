import { NavBar } from "./navBar";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Carousel1, { carouselImages } from "./carousel1";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          width: "100vW",
          height: "100vH",
          paddingTop: "251px",
          paddingBottom: "0px",
          marginBottom: "0px",
        }}
      >
        <Box
          sx={{
            justifyContent: "top",
            display: "flex",
            flexDirection: "column",
            marginTop: "0px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: "42px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            Featured Products
          </Typography>
          <Box
            sx={{
              paddingTop: "30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "24px",
                fontWeight: "400800",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "Center",
              }}
            >
              Explore and discover a variety of products
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // display: "flex",
            // flexDirection: "row",
            height: "100%",
          }}
        >
          <Carousel1 carouselImages={carouselImages} />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
