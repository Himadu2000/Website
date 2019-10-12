import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Blog from "./components/Blog";

class Homepage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    return (
      <Router>
        <div>
          <Blog />
        </div>
      </Router>
    );
  }
}

export default Homepage;
