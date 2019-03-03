import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import banner from "./../Banner/banner.png";
const styles = {
  root: {
    marginTop: 50
  },
  Gird: {
    align: "center",
    banckgroundColor: "white",
    paddingTop: 20
  },
  imageStyles: {
    maxWidth: "100%"
  },
  Typography: {
    paddingTop: 150,
    paddingLeft: 50,
    paddingBottom: 20
  },
  Button: {
    marginLeft: 50,
    marginTop: 20
  }
};
class Banner extends Component {
  state = {};
  render() {
    return (
      <Grid container style={styles.root}>
        <Grid item lg={6} sm style={styles.Grid}>
          <Typography
            variant="h4"
            component="h6"
            style={styles.Typography}
            id="appbar"
          >
            Distributed System Course
          </Typography>
          <Typography style={{ paddingLeft: 50 }}>
            Codeathlon's Distributed System Courses is a set of hands-on, case
            study based classroom training courses for learning distributed
            systems.
          </Typography>
          <Button variant="contained" color="primary" style={styles.Button}>
            sign in
          </Button>
        </Grid>
        <Grid item sm={6} style={{ marginTop: 10 }}>
          <img alt="logo" src={banner} style={styles.imageStyles} />
        </Grid>
      </Grid>
    );
  }
}

export default Banner;
