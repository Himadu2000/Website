import React from "react";
import Nasa from "./components/Nasa";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };
  render() {
    return (
      <>
        <Nasa />
      </>
    );
  }
}
