import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../../images/logo.png";
import "./header.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar
} from "@material-ui/core";

const styles = {
  grow: {
    flexGrow: 1,
    marginTop: 15
  },
  menuButton: {
    marginRight: 12
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    marginRight: "auto",
    width: 20,
    height: 20
  },
  logoName: {
    margin: 10,
    color: "blue",
    backgroundColor: "white",
    fontSize: "30px",
    fontWeight: "bold"
  }
};

const Header = props => {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      title={logo}
      color="inherit"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid  #00285e"
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div>
          <div id="header_logo" />
        </div>
        <Typography variant="h6" className={classes.grow}>
          Codeathlon Learning Series-Distributed Systems
        </Typography>
        <Button color="inherit" href="#appbar">
          Home
        </Button>
        <Button color="inherit" href="#basic">
          Courses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
