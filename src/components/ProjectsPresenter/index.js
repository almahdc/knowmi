import React, {Component} from "react";

// Style
import {Grid} from "@material-ui/core";

// Components
import CardDescription from "../UI/CardDescription";
import SimpleTitleContent from "../SimpleTitleContent";

// Redux
import {connect} from "react-redux";
import * as actions from "../../store/actions";

class ProjectsPresenter extends Component {
  componentDidMount() {
    this.props.onFetchProjectsList();
  }

  render() {
    return (
      <SimpleTitleContent header={this.props.header}>
        {Object.keys(this.props.myProjects).map((keyName, i) => {
          return (
            <Grid item key={i}>
              <CardDescription projectInfo={this.props.myProjects[keyName]} />
            </Grid>
          );
        })}
      </SimpleTitleContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    myProjects: state.infoReducer.retrivedData,
    loading: state.infoReducer.loading,
    error: state.infoReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProjectsList: () => dispatch(actions.projectsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPresenter);
