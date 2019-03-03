import React, { Component } from "react";
import {
  Grid,
  Card,
  List,
  ListItemText,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const styles = {
  Grid: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F5F5F5"
  },
  card: {
    margin: 7,
    maxWidth: 400,
    maxHeight: 300,
    borderRadius: 15,
    height: "inherit",
    overflowY: "auto"
  }
};
export default class Pricing extends Component {
  state = {
    introductoryCourse: {
      id: 1,
      name: "Introductory Course",
      topics: [
        {
          id: 1,
          topic: "Introduction"
        },
        {
          id: 2,
          topic: "Distributed Processing"
        },
        {
          id: 3,
          topic: "Distributed Data Storage"
        },
        {
          id: 4,
          topic: "NoSQL Databases"
        },
        {
          id: 5,
          topic: "Microservices"
        },
        {
          id: 6,
          topic: "System Design & Project"
        }
      ]
    },
    intermidiateCourse: {
      id: 2,
      name: "Intermediate Course",
      topics: [
        {
          id: 1,
          topic: "Introduction"
        },
        {
          id: 2,
          topic: "Distributed Processing"
        },
        {
          id: 3,
          topic: "Distributed Data Storage"
        },
        {
          id: 4,
          topic: "NoSQL Databases"
        },
        {
          id: 5,
          topic: "Microservices"
        },
        {
          id: 6,
          topic: "System Design & Project"
        },
        {
          id: 7,
          topic: "Distributed Hashing & Queues"
        },
        {
          id: 8,
          topic: "Concurrency & Replication Control"
        },
        {
          id: 9,
          topic: "Stream Processing"
        }
      ]
    },
    advancedCourse: {
      id: 2,
      name: "Advanced Course",
      topics: [
        {
          id: 1,
          topic: "Introduction"
        },
        {
          id: 2,
          topic: "Distributed Processing"
        },
        {
          id: 3,
          topic: "Distributed Data Storage"
        },
        {
          id: 4,
          topic: "NoSQL Databases"
        },
        {
          id: 5,
          topic: "Microservices"
        },
        {
          id: 6,
          topic: "System Design & Project"
        },
        {
          id: 7,
          topic: "Distributed Hashing & Queues"
        },
        {
          id: 8,
          topic: "Concurrency & Replication Control"
        },
        {
          id: 9,
          topic: "Stream Processing"
        },
        {
          id: 10,
          topic: "Distributed Ledgers - Blockchain"
        },
        {
          id: 11,
          topic: "Distributed Consensus"
        },
        {
          id: 12,
          topic: "Distributed Locking"
        }
      ]
    }
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Grid container style={styles.Grid}>
        <Grid item sm={12} align="center">
          <h1>Let's get started</h1>
          <p>
            Everything you need to start a wildy profitable online beat selling
            business.
          </p>
        </Grid>
        <Grid sm={4}>
          <Card style={styles.card} align="center">
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              color="primary"
              style={{ fontWeight: "bold", paddingTop: 20 }}
            >
              {this.state.introductoryCourse.name}
            </Typography>

            <CardContent>
              {this.state.introductoryCourse.topics.map(topic => (
                <List>
                  <ListItemText>{topic.topic}</ListItemText>
                </List>
              ))}
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 20 }}
            >
              Sing up for just 9,999 /-
            </Button>
          </Card>
        </Grid>
        <Grid sm={4}>
          <Card style={styles.card} align="center">
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              color="primary"
              style={{ fontWeight: "bold", paddingTop: 20 }}
            >
              {this.state.intermidiateCourse.name}
            </Typography>
            <CardContent>
              {this.state.intermidiateCourse.topics.map(topic => (
                <List>
                  <ListItemText>{topic.topic}</ListItemText>
                </List>
              ))}
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 20 }}
            >
              Sing up for just 14,999 /-
            </Button>
          </Card>
        </Grid>
        <Grid sm={4} align="center">
          <Card style={styles.card}>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              color="primary"
              style={{ fontWeight: "bold", paddingTop: 20 }}
            >
              {this.state.advancedCourse.name}
            </Typography>
            <CardContent>
              {this.state.advancedCourse.topics.map(topic => (
                <List>
                  <ListItemText>{topic.topic}</ListItemText>
                </List>
              ))}
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 20 }}
            >
              Sing up for just 19,999 /-
            </Button>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
