import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import evolve_pic from "../../assets/pictures/evolve.png";
import todo_pic from "../../assets/pictures/todo.png";
import category_pic from "../../assets/pictures/category.png";
import music_pic from "../../assets/pictures/music.png";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "E-Commerce Application",
    imgPath: evolve_pic,
    link: "https://e-volve-80dcc.firebaseapp.com/",
    git: "https://github.com/cssher/e-Volve",
  },
  {
    label: "React Redux Todo",
    imgPath: todo_pic,
    link: "https://cssher.github.io/react-redux-todo-app/",
    git: "https://github.com/cssher/react-redux-todo-app",
  },
  {
    label: "E-Commerce Category Filter",
    imgPath: category_pic,
    link: "https://cssher.github.io/e-commerce-category-segmentation/",
    git: "https://github.com/cssher/e-commerce-category-segmentation",
  },
  {
    label: "Backend for a Music Player",
    imgPath: music_pic,
    link: "https://github.com/cssher/Zypher-Music-Project",
    git: "https://github.com/cssher/Zypher-Music-Project",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    padding: theme.spacing(2),
    background: "#0a192f",
    color: "white",
    border: "2px solid #00c9aa",
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
}));

const link = {
  float: "right",
  marginLeft: "10px",
};

const git = {
  float: "right",
  marginLeft: "10px",
};

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handlePageChange = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>
          {tutorialSteps[activeStep].label}
          <LinkIcon
            style={link}
            onClick={() => handlePageChange(tutorialSteps[activeStep].link)}
          />
          <GitHubIcon
            style={git}
            onClick={() => handlePageChange(tutorialSteps[activeStep].git)}
          />
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
