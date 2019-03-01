import React, { Component } from "react";
import {
  Grid,
  ListItem,
  List,
  Paper,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

const styles = {
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "#F5F5F5"
  }
};
class Footer extends Component {
  render() {
    return (
      <Grid container style={styles.root}>
        <Grid item sm={4}>
          <h3>Navigation</h3>
          <List>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">COntact us</a>
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={4}>
          <h3>Contact Us</h3>
          <List>
            <ListItem>
              <a href="#basic">Distributed Systems - Introductory Course</a>
            </ListItem>
            <ListItem>
              <a href="#intermediate">
                Distributed Systems - Intermediate Course
              </a>
            </ListItem>
            <ListItem>
              <a href="#advanced">Distributed Systems - Advanced Course</a>
            </ListItem>
          </List>
        </Grid>

        <Grid item sm={4}>
          <h3>Company</h3>
          <ListItem>
            <a href="#">Terms of Service</a>
          </ListItem>
          <ListItem>
            <a href="#">Disclaimer</a>
          </ListItem>
          <ListItem>
            <a href="#">Privacy Policy</a>
          </ListItem>
        </Grid>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography color="inherit">
              © 2019 All Rights Reserved • Codeathleon
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}
export default Footer;
