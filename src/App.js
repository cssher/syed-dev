import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
// import WhatshotIcon from "@material-ui/icons/Whatshot";
import WorkIcon from "@material-ui/icons/Work";
import ToysIcon from "@material-ui/icons/Toys";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from "@material-ui/core/Box";
//import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import PageOne from "./components/page_one/PageOne";
import ScrollIntoView from "react-scroll-into-view";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "white",
    cursor: "pointer",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "11px",
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    color: "#00C9AA",
    ["@media screen and (max-width:800px)"]: {
      width: 15,
      height: 15,
      marginRight: theme.spacing(0),
    },
  },
  appbar: {
    background: "#0a192f",
  },
  breadcrumb: {
    color: "#00C9AA",
  },
  resumeButton: {
    background: "transparent",
    marginLeft: "auto",
    border: "2px solid #00C9AA",
    color: "#00C9AA",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "10px",
      border: "1px solid #00C9AA",
    },
  },
}));

const useStylesTop = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStylesTop();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function handleClick(event) {
  console.info("You clicked a breadcrumb.");
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const navItems = {
  color: "white",
};

const pages = {
  display: "flex",
  flexDirection: "column",
};

const loadResume = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function App(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6">
              {" "}
              <div style={navItems}></div>
              <Breadcrumbs className={classes.breadcrumb}>
                <ScrollIntoView selector="#about_page">
                  <Link onClick={handleClick} className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    About
                  </Link>
                </ScrollIntoView>
                <ScrollIntoView selector="#work_page">
                  <Link
                    color="inherit"
                    onClick={handleClick}
                    className={classes.link}
                  >
                    <WorkIcon className={classes.icon} />
                    Work
                  </Link>
                </ScrollIntoView>

                <ScrollIntoView selector="#project_page">
                  <Link
                    color="inherit"
                    onClick={handleClick}
                    className={classes.link}
                  >
                    <ToysIcon className={classes.icon} />
                    Projects
                  </Link>
                </ScrollIntoView>
                <ScrollIntoView selector="#contact_page">
                  <Link
                    color="inherit"
                    onClick={handleClick}
                    className={classes.link}
                  >
                    <ContactPhoneIcon className={classes.icon} />
                    Contact
                  </Link>
                </ScrollIntoView>
              </Breadcrumbs>
            </Typography>
            <Button
              variant="contained"
              className={classes.resumeButton}
              onClick={() => {
                loadResume(
                  "https://drive.google.com/file/d/132OfaQazNQ-cdLC-mZpibP5Oy_XSC8Jr/view?usp=sharing"
                );
              }}
            >
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <div style={pages}>
        <span id="back-to-top-anchor">
          <PageOne />
        </span>
        <span id="about_page">
          <About />
        </span>

        <span id="work_page">
          <Work />
        </span>

        <span id="project_page">
          {" "}
          <Project />
        </span>

        <span id="contact_page">
          <Contact />
        </span>
      </div>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      {/* <div id="projects">
        <PageOne />
      </div> */}
    </>
  );
}
