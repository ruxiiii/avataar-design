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
import "../App.css";

const useStyles = makeStyles(() => ({
  diagonalLinesContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  diagonalLine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundImage:
      // "linear-gradient(45deg, black 25%, transparent 25%, transparent 45%, black 45%, black)",
      "linear-gradient(45deg, transparent 20%, black 20%, transparent 20%, black 20%, transparent 20%, black 20%)",
    backgroundSize: "cover",
    color: "white",
    backGroundRepeat: "no-repeat",
    width: "50px",
  },
  navBarTypo: {
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "20px",
    color: "white",
    // zIndex: 1,
    flexGrow: "0.5",
    alignItems: "center",
    fontFamily: "'Lato', sans-serif",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      sx={{
        backgroundColor: "#2F302C",
        postion: "absolute",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          flexGrow={1}
          sx={{
            display: "flex",
            width: "100vw",
            height: "48px",
            paddingLeft: "16px",
            paddingRight: "16px",
            position: "relative",
            alignItems: "center",
            "@media (min-width:600px)": {
              paddingLeft: "32px",
              paddingRight: "32px",
            },
            // "@media (min-width:0px)": {
            //   minHeight: "72px",
            // },
            "@media (min-width:960px)": {
              paddingLeft: "48px",
              paddingRight: "48px",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              gap: "80px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              width: "164px",
              transition:
                "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              border: "0",
            }}
          >
            <Link
              to="/"
              style={{
                margin: "0px",
                height: "20px",
                backgroundColor: "white",
              }}
            >
              <Box
                className={classes.diagonalLinesContainer}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  zIndex: "1",
                  width: "20px",
                }}
              >
                <Box className={classes.diagonalLine}></Box>
              </Box>
            </Link>
            <Box
              sx={{
                // marginLeft: "29px",
                marginTop: "1px",
                flexGrow: "1",
                width: "30%",
                textAlign: "left",
                marginLeft: "10px",
              }}
            >
              <Typography
                sx={{
                  width: "200px",
                  fontStyle: "Lato !importnat",
                  fontWeight: 410,
                  fontSize: "32px",
                  lineHeight: "20px",
                  flexGrow: 1,
                }}
              >
                E-COMM
              </Typography>
            </Box>
            <Box
              sx={{
                width: "75%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "end",
                paddingLeft: "80px",
                gap: "20px",
                // flexWrap: "nowrap",
              }}
            >
              <Link to="/" className={classes.navBarTypo}>
                HOME
              </Link>
              <Link to="/electronics" className={classes.navBarTypo}>
                ELECTRONICS
              </Link>
              <Link to="/books" className={classes.navBarTypo}>
                BOOKS
              </Link>
              <Link to="/music" className={classes.navBarTypo}>
                MUSIC
              </Link>
              <Link to="/movies" className={classes.navBarTypo}>
                MOVIES
              </Link>
              <Link to="/clothing" className={classes.navBarTypo}>
                CLOTHING
              </Link>
              <Link to="/games" className={classes.navBarTypo}>
                GAMES
              </Link>
              <Link to="/more" className={classes.navBarTypo}>
                MORE
              </Link>
              <Autocomplete
                sx={{
                  alignItems: "center",
                  width: "400px",
                  height: "20px",
                  padding: "12px, 0px, 12px, 0px",
                  border: "0px, 0px, 1px, 0px",
                  gap: "12px",
                  color: "white",
                  flexWrap: "wrap",

                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "0px, 0px, 1px, 0px",
                    height: "20px",
                    borderRadius: "20px",
                    width: "300px",
                    padding: "0px 10px",
                    color: "blue",
                  },
                }}
                disablePortal
                id="combo-box-demo"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search title"
                    inputProps={{
                      style: {
                        border: "none",
                        width: "100%",
                        height: "20px !important",
                        padding: "20px",
                        color: "white",
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
