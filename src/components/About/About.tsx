import React, { Component } from "react";
import Aboutme from "./components/Aboutme";
import Progress from "./components/Progress";
import Thanks from "./components/Thanksgiving";

class About extends Component {
  render() {
    return (
      <div>
        <Aboutme />
        <Progress />
        <Thanks />
      </div>
    );
  }
}
export default About;
