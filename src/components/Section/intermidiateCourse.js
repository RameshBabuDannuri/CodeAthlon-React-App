import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CourseModule from "./courseModule";
const styles = {
  root: {
    justifyContent: "center",
    marginTop: 10
  },
  Button: {
    marginTop: 20
  }
};
export default class IntermidiateCourse extends Component {
  state = {
    course: [
      {
        id: 1,
        name: "Introduction",
        discription: "An introduction to the masterclass and best practices.",
        topics: [
          { id: 1, topic: " Introduction to Distributed Systems" },
          { id: 2, topic: "Cloud Computing" },
          { id: 3, topic: "Comparison with non-distributed systems" }
        ]
      },
      {
        id: 2,
        name: " Distributed Processing",
        discription:
          "Learn about distrobuted processing, Map Reduce, and Hadoop",
        topics: [
          { id: 1, topic: "Introduction to Distributed Processing" },
          { id: 2, topic: "Map Reduce" },
          { id: 3, topic: "Time in Distributed Systems" },
          { id: 4, topic: "Vector Clock" },
          { id: 5, topic: "Case Study - Instagram" },
          { id: 6, topic: "Hands On - Hadoop" }
        ]
      },
      {
        id: 3,
        name: "Distributed Hashing & Queues",
        discription: "Learn about distributed hashing",
        topics: [
          { id: 1, topic: "Introduction to Distributed Hashing" },
          { id: 2, topic: "Consistent Hashing" },
          { id: 3, topic: "Distributed Queues" },
          { id: 4, topic: " Case study - SQS " },
          { id: 5, topic: "Hadsn On - Kafka" }
        ]
      },
      {
        id: 4,
        name: " Distributed Data Storage",
        discription:
          "Learn fundamentals of distributed data storage and concepts like Eventual Consistency, Quorom",
        topics: [
          { id: 1, topic: "Introduction to Distributed Data Storage" },
          { id: 2, topic: " Eventual Consisteny" },
          { id: 3, topic: "Quorom" },
          { id: 4, topic: " Case study - Dynamo DB " },
          { id: 5, topic: "Hands On - Redis" }
        ]
      },
      {
        id: 5,
        name: "NoSQL Databases",
        discription:
          "Learn about NoSQL Databases concepts and various kids of noSQL databases",
        topics: [
          { id: 1, topic: "NoSQL Databases Introduction" },
          { id: 2, topic: "Key Value store" },
          { id: 3, topic: "Document Databases" },
          { id: 4, topic: "Column Databases " },
          { id: 5, topic: "Graph Databases" },
          { id: 6, topic: "Case Study - Document DB" },
          { id: 7, topic: " Hands On - Mongo DB" }
        ]
      },
      {
        id: 6,
        name: "Concurrency and Replication Control",
        discription:
          "Learn about concurrency and replication control          ",
        topics: [
          { id: 1, topic: "Introduction to Concurrency Control" },
          { id: 2, topic: " Transactions & Serialization" },
          { id: 3, topic: "Pessimistic Concurrency" },
          { id: 4, topic: "Optimistic Concurrency " },
          { id: 5, topic: "Replication Control" },
          { id: 6, topic: "Two Phase Commit" }
        ]
      },
      {
        id: 7,
        name: "Stream Processing",
        discription: "Learn about stream processing",
        topics: [
          { id: 1, topic: "Introduction to Stream Processing" },
          { id: 2, topic: "Case study - Apache Storm" },
          { id: 3, topic: "Hands On - Apache Storm" }
        ]
      },
      {
        id: 8,
        name: " Microservcies",
        discription:
          "Learn about Microservcies and SOA concepts, important of sync and async functions and API design",
        topics: [
          { id: 1, topic: "Microservcies Introduction" },
          { id: 2, topic: "Sync vs Async Systems" },
          { id: 3, topic: "API Design" },
          { id: 4, topic: "Case study - Google File System " },
          { id: 5, topic: " Hands On - HDFS" }
        ]
      },
      {
        id: 9,
        name: "System Design & Project",
        discription:
          "Learn fundamentals of system design, and complete the course project to use all the conepts learnt during the course",
        topics: [
          { id: 1, topic: " System Design" },
          { id: 2, topic: " Course Project" },
          { id: 3, topic: "Discussion" },
          { id: 4, topic: " Course Completion Dinner!" }
        ]
      }
    ]
  };
  render() {
    return (
      <Grid container style={styles.root}>
        <Grid sm={12} align="center">
          <Typography variant="h4" gutterBottom>
            Distributed Systems - Intermediate Course
          </Typography>
          <Typography variant="h6"> WHAT WILL YOU LEARN</Typography>
        </Grid>

        {this.state.course.map(course => (
          <CourseModule key={course.id} course={course} color="primary" />
        ))}
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={styles.Button}
        >
          Sing up for just 14,999 /-
        </Button>
      </Grid>
    );
  }
}
