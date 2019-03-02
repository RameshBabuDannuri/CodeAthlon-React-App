import React, { Component } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  Typography,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const styles = {
  root: {
    justifyContent: "center",
    marginTop: 10
  },
  Grid: {
    marginLeft: 20
  },
  Papper: {
    margin: 7,
    padding: 10,
    minHeight: 350,
    height: "inherit",
    borderRadius: 15,
    background: "light-grey"
  },
  Typography: {
    color: "#3C71E9"
  }
};

class CourseModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, name, discription, topics } = this.props.course;
    return (
      <Grid item sm={4} style={styles.style}>
        <Paper style={styles.Papper}>
          <Typography variant="h6" style={styles.Typography}>
            Module {id}- {name}
          </Typography>
          <Typography variant="subheading" gutterBottom>
            {discription}
          </Typography>
          <List>
            {topics.map(topic => (
              <ListItemText key={topic.id}>
                <i class="material-icons" style={{ color: "blue" }}>
                  subdirectory_arrow_right
                </i>
                {topic.topic}
              </ListItemText>
            ))}
          </List>
        </Paper>
      </Grid>
    );
  }
}

export default CourseModule;
