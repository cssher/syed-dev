import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import profile_pic from "../../assets/pictures/Profile_Pic.png";

import "./Contact.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const connect = {
  display: "flex",
  flexDirection: "column",
};

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact">
      <div className={classes.root}>
        <h1>Get In Touch</h1>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt="Sher Ali" src={profile_pic} />
        </StyledBadge>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        ></Badge>
      </div>
      <div style={connect}>
        <a href="mailto:sherali2910.sa@gmail.com">sherali2910.sa@gmail.com</a>

        <a
          href="https://www.linkedin.com/in/syed-sher-ali-hussain-6610687b/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
