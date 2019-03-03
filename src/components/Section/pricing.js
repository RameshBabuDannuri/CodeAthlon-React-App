import React, { Component } from "react";
import {
  Grid,
  Card,
  List,
  ListItemText,
  CardContent,
  Typography,
  Button,
  Paper
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
    minHeight: 690,
    borderRadius: 15,
    height: "inherit"
  }
};
export default class Pricing extends Component {
  state = {
    introductoryCourse: {
      id: 1,
      name: "Introductory Course",
      icon: "fas fa-chess-pawn fa-3x",
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
      icon: "fas fa-chess-knight fa-3x",
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
      icon: "fas fa-chess-queen fa-3x",
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
      <Paper>
        <Grid container style={styles.Grid}>
          <Grid item sm={12} align="center">
            <h1>Let's get started</h1>
            <p>
              Everything you need to start a wildy profitable online beat
              selling business.
            </p>
          </Grid>
          <Grid item sm={4}>
            <Card style={styles.card} align="center">
              <i className={this.state.introductoryCourse.icon} />
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
                style={{ marginTop: "250px" }}
              >
                Sing up for just 9,999 /-
              </Button>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card style={styles.card} align="center">
              <i className={this.state.intermidiateCourse.icon} />
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
                style={{ marginTop: "130px" }}
              >
                Sing up for just 14,999 /-
              </Button>
            </Card>
          </Grid>
          <Grid sm={4} align="center">
            <Card style={styles.card}>
              <i className={this.state.advancedCourse.icon} />
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
                style={{ margin: 10 }}
              >
                Sing up for just 19,999 /-
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
