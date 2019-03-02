import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
  Card
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
const styles = {
  Grid: {
    marginTop: 20,
    backgroundColor: "#f5f5f5"
  },
  Paper: {
    margin: 10,
    minHeight: 400,
    height: "inherit",
    padding: 10,
    borderRadius: 15
  },
  Typography: {
    color: "#1e88e5",
    marginTop: 10
  },
  subheding: {
    marginTop: 20
  },
  Button: {
    marginLeft: 50,
    marginBottom: "inherit"
  }
};
export default class Course extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: "Distributed Systems - Introductory Course",
        price: "9,999",
        desciption:
          "Learn fundamentals of Distributed Processing, Distributed Data Storage, NoSQL Databases, Microservcies, API Design, and System Design",
        // eslint-disable-next-line no-sparse-arrays
        highlights: [
          { id: 1, desciption: "6 Modules, each module 4 hours each" },
          {
            id: 2,
            desciption:
              "Case Study in every module to understand real life application"
          },
          ,
          { id: 3, desciption: "Hands on exercise in each module" }
        ]
      },
      {
        id: 2,
        name: "Distributed Systems - Intermediate Course",
        price: "14,999",
        desciption:
          "Learn fundamentals of Distributed Processing, Distributed Data Storage, NoSQL Databases, Microservcies, API Design, and System Design",
        // eslint-disable-next-line no-sparse-arrays
        highlights: [
          {
            id: 1,
            desciption: "9 Modules, each module 4 hours each"
          },
          {
            id: 2,
            desciption:
              "Case Study in every module to understand real life application"
          },
          ,
          { id: 3, desciption: "Hands on exercise in each module" }
        ]
      },
      {
        id: 3,
        name: "Distributed Systems - Advanced Course",
        price: "19,999",
        desciption:
          "Learn fundamentals of Distributed Processing, Distributed Data Storage, NoSQL Databases, Microservcies, API Design, and System Design",
        // eslint-disable-next-line no-sparse-arrays
        highlights: [
          { id: 1, desciption: "12 Modules, each module 4 hours each" },
          {
            id: 2,
            desciption:
              "Case Study in every module to understand real life application"
          },
          ,
          { id: 3, desciption: "Hands on exercise in each module" }
        ]
      }
    ]
  };
  render() {
    return (
      <Grid container style={styles.Grid}>
        <Grid sm={12} spacing={24} align="center">
          <Typography variant="h4">How it works</Typography>
          <Typography variant="subheading">
            Learn Distributed Systems{" "}
          </Typography>
          <Typography variant="h6">
            Hands-on case study based classroom learning series
          </Typography>
        </Grid>
        {this.state.courses.map(course => (
          <Grid item sm={4} key={course.id}>
            <Card style={styles.Paper}>
              <Typography
                variant="title"
                gutterBottom
                style={styles.Typography}
              >
                {course.name}
              </Typography>
              <Typography
                variant="subheading"
                gutterBottom
                style={styles.subheding}
              >
                {course.desciption}
              </Typography>
              <List style={styles.List}>
                {course.highlights.map(height => (
                  <ListItem key={height.id}>
                    {" "}
                    <Icon style={styles.icon} color="primary">
                      book
                    </Icon>
                    {height.desciption}
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={styles.Button}
              >
                Price: {course.price} /-
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
