import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../../images/codeathlon.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    marginTop: 15
  },
  menuButton: {
    marginLeft: -12,
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
    <div className={classes.root}>
      <AppBar position="static" title={logo} color="inherit">
        <Toolbar styles={{ boxShadow: "none", backgroundColor: "red" }}>
          <Avatar className={classes.logoName}>Ca</Avatar>
          <Typography variant="h6" color="primary" className={classes.grow}>
            Codeathlon Learning Series-Distributed Systems
          </Typography>
          <Button color="primary">Home</Button>
          <Button color="primary">Courses</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
