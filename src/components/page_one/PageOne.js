import React from "react";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./PageOne.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    fontFamily: "cursive",
    padding: "10px",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      justifyContent: "center",
      padding: "30px",
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  blue: {
    backgroundColor: "blue",
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  green: {
    backgroundColor: "#00ff66",
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  yellow: {
    backgroundColor: "#ffb95e",
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  red: {
    backgroundColor: "#d12a5c",
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
  teal: {
    backgroundColor: "#009191",
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "15px",
      padding: "5px",
    },
  },
}));

const icon = {
  display: "flex",
  justifyContent: "space-around",
  color: "white",
};

const iconIn = {
  fontSize: "2em",
  cursor: "pointer",
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function PageOne() {
  const classes = useStyles();

  return (
    <div id="typewriter">
      <Typewriter
        options={{
          strings: ["Hey, I'm Syed !"],
          autoStart: true,
          loop: true,
        }}
      />

      <div className={classes.root}>
        <Avatar className={classes.orange}>N</Avatar>
        <Avatar className={classes.blue}>A</Avatar>
        <Avatar className={classes.purple}>M</Avatar>
        <Avatar className={classes.green}>A</Avatar>
        <Avatar className={classes.yellow}>S</Avatar>
        <Avatar className={classes.red}>T</Avatar>
        <Avatar className={classes.teal}>E</Avatar>
      </div>

      <p>
        {" "}
        <h3>I am a software developer based in India. </h3>A <i>Frontend</i>{" "}
        enthusiast by choice; striving to make web beautiful one piece of code
        at a time.
      </p>
      <div style={icon}>
        <LinkedInIcon
          style={iconIn}
          onClick={() => {
            openInNewTab(
              "https://www.linkedin.com/in/syed-sher-ali-hussain-6610687b/"
            );
          }}
        />
        <GitHubIcon
          style={iconIn}
          onClick={() => {
            openInNewTab("https://github.com/cssher");
          }}
        />
      </div>
    </div>
  );
}

export default PageOne;
