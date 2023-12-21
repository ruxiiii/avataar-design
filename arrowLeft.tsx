import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  className: any;
  // Assuming you have a redux state property named 'someReduxValue'
  someReduxValue?: boolean;
}

const useStyles = makeStyles(() => ({
  // Define your styles here if needed
}));

export const ArrowLeft = ({
  className,
  someReduxValue,
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <svg
      className={`arrow-left-1 ${classes.path} ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.12132 10.5H21V13.5H8.12132L13.0607 18.4393L10.9393 20.5607L2.37868 12L10.9393 3.43934L13.0607 5.56066L8.12132 10.5Z"
        fill={someReduxValue ? "#YourActiveColor" : "#YourInactiveColor"}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowLeft.propTypes = {
  className: PropTypes.any,
  someReduxValue: PropTypes.bool,
};

const mapStateToProps = (state: RootState) => ({
  someReduxValue: state.someReduxValue,
});

export const ArrowLeft1 = connect(mapStateToProps)(ArrowLeft);
