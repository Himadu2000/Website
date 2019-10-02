import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ImageTable from "./components/ImageTable";
import MM from "./components/MM";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div>
          <MM />
          <ImageTable />
        </div>
      </Router>
    );
  }
}

export default Homepage;
