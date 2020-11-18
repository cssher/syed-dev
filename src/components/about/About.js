import React from "react";
import profile_pic from "../../assets/pictures/Profile_Pic.png";
import javascript_pic from "../../assets/pictures/js.png";
import html_pic from "../../assets/pictures/HTML5.png";
import css_pic from "../../assets/pictures/css.png";
import react_pic from "../../assets/pictures/react.png";
import node_pic from "../../assets/pictures/nodejs.png";
import rails_pic from "../../assets/pictures/rails.svg";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import "./About.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      margin: theme.spacing(0),
    },
  },
  colorPrimary: {
    backgroundColor: "#00c9aa",
    color: "white",
  },
}));

const useSkillStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1),
    margin: 0,
    background: "#C4FCF0",
    color: "yellow",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      padding: theme.spacing(0),
    },
  },
  chip: {
    background: "#80B2C9",
    color: "#18003E",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    fontWeight: "bolder",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      padding: theme.spacing(0),
      margin: theme.spacing(0.5),
      fontSize: "10px",
    },
  },
}));

const skill = {
  color: "#00c9aa",
  padding: "5px",
};

function About() {
  const classes = useStyles();
  const skillClasses = useSkillStyles();

  return (
    <div id="about">
      <span className="about_text">
        <h1>About Me</h1>
        <span className={classes.root}>
          <LinearProgress className={classes.colorPrimary} />
        </span>
        <p>
          Hello! my name is <b>Syed Sher Ali Hussain</b>. I am an Electrical
          Engineering graduate from Calcutta Institute Of Technology, India. A{" "}
          <b>self-taught</b> developer working my way up the coding ecosystem
          who fell in love with <b>JavaScript</b>. My main interest lies in the{" "}
          <b>frontend</b> paradigm. Being a self-taught coder I've learnt to be
          a <b>self starter</b>. I enjoy coding and problem solving by utilising
          computer science fundamentals. Currently I am working as a Software
          Developer where I work on a wide range of tech stack on a daily basis.
          I take the notion of a <b>life-long learner</b> gravely, always ready
          to accept my incompetencies and take initiative to skill-up
          accordingly. Besides this, I am an avid reader exploring new topics
          and a football enthusiast.
        </p>
        <p style={skill}>
          <span>Tech I've worked with:</span>
          <Paper component="ul" className={skillClasses.root}>
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={javascript_pic} />}
              label="JavaScript"
            />
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={html_pic} />}
              label="HTML5"
            />
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={css_pic} />}
              label="CSS3"
            />
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={react_pic} />}
              label="React.js"
            />
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={node_pic} />}
              label="Node.js"
            />
            <Chip
              className={skillClasses.chip}
              avatar={<Avatar alt="Natacha" src={rails_pic} />}
              label="Ruby on Rails"
            />
          </Paper>
        </p>
      </span>

      <img src={profile_pic} alt="" className="profile_pic" />
    </div>
  );
}

export default About;
