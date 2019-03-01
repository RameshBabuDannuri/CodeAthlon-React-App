import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import IntroductoryCourse from "./introductoryCourse";
import AdvancedCourse from "./advancedCourse";
import IntermidiateCourse from "./intermidiateCourse";

const style = {
  AppBar: {
    marginTop: 20
  }
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 4 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class CourseWrappedLabel extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root} container>
          <AppBar position="static" color="default" style={style.AppBar}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab
                label="Distributed Systems - Introductory Course"
                href="page1"
                id="basic"
              />
              <LinkTab
                label="Distributed Systems - Intermediate Course"
                href="page2"
                id="intermediate"
              />
              <LinkTab
                label="Distributed Systems - Advanced Course"
                href="page3"
                id="advanced"
              />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <IntroductoryCourse />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <IntermidiateCourse />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <AdvancedCourse />
            </TabContainer>
          )}
        </div>
      </NoSsr>
    );
  }
}

CourseWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseWrappedLabel);
