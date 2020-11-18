import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import BuildIcon from "@material-ui/icons/Build";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5px",
    textAlign: "auto",
    background: "transparent",
    color: "white",
    width: "auto",
    border: "1px solid #00c9aa",
    // eslint-disable-next-line
    ["@media screen and (max-width:800px)"]: {
      fontSize: "10px",
      padding: "2px",
      width: "150%",
    },
  },
  secondaryTail: {
    color: "white",
  },
}));

export default function J2W() {
  const classes = useStyles();
  return (
    <Timeline align="alternate" className="work_timeline">
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h9" component="h4">
              December 2019 - Present
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h9" component="h4">
              HTML, CSS, JavaScript, React.js, Ruby on Rails
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h9" component="h4">
              <ul>
                <li>
                  Integrated helpdesk system in web application for consultants
                  for faster grievance redressal triggering added positive
                  client feedback. Also implemented the backend API for the same
                  in mobile app.
                </li>
                <li>
                  Designed and developed fresh dashboard for an internal role to
                  process job referrals increasing overall conversion ratio.
                </li>
                <li>
                  Revamped the whole UI of internal main web application for
                  business teams enhancing the user experience and smooth
                  workflow in processing clients; triggering team productivity
                  and hence over growth.
                </li>
                <li>
                  Wrote backend APIs for a completely new mobile app to process
                  dynamic and data intensive API calls very fast.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
