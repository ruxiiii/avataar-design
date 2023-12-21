import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { makeStyles } from "@mui/styles";

interface Props {
  active: boolean;
  className: any;
}

const useStyles = makeStyles(() => ({
  activeFalse: {
    backgroundColor: "var(--primaryblackblack-200)",
    borderRadius: "4px",
    height: "8px",
    opacity: 0.5,
    width: "8px",
  },

  activeTrue: {
    backgroundColor: "var(--primaryblueblue-500)",
    borderRadius: "24px",
    height: "12px",
    width: "32px",
  },
}));

export const DotIndictaor = ({ active, className }: Props): JSX.Element => {
  const classes = useStyles();
  const indicatorClass = active ? classes.activeTrue : classes.activeFalse;

  return <div className={`active ${indicatorClass} ${className}`} />;
};

DotIndictaor.propTypes = {
  active: PropTypes.bool,
};

export default DotIndictaor;
