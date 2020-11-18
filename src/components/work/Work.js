import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import J2W from "./J2W";
import Button from "@material-ui/core/Button";
import "./Work.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const appBar = {
  background: "#0a192f",
  border: "1px solid #00c9aa",
};
const tab = {
  color: "white",
  fontWeight: "bolder",
};
const tabPanel = {
  background: "#0a192f",
  border: "1px solid #00c9aa",
  color: "white",
};
const btn = {
  background: "transparent",
  border: "2px solid #00c9aa",
  color: " #00c9aa",
};

function Work() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="work">
      <h1>Work Experience</h1>
      <div className={classes.root}>
        <AppBar position="static" style={appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="JoulesToWatts Business Solutions"
              {...a11yProps(0)}
              style={tab}
            />
            <Tab label="Next Challenge" {...a11yProps(1)} style={tab} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} style={tabPanel}>
          <J2W />
        </TabPanel>
        <TabPanel value={value} index={1} style={tabPanel}>
          Have something intresting for me ?{" "}
          <Button
            variant="contained"
            color=""
            style={btn}
            href="javascript: void(0)"
            onClick="location.href='mailto:sherali2910.sa@gmail.com';"
          >
            Hit Me Up
          </Button>
        </TabPanel>
      </div>
    </div>
  );
}

export default Work;
