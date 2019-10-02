import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./components/Carousel";
import Comment from "./components//Comment/Comment";
import AddComment from "./components/Comment/AddComment";
import { MDBContainer } from "mdbreact";
import Quotes from "./components/Quote/Quotes";
import QuoteCard from "./components/Quote/QuoteCard";
import Alert from "./components/Alert";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div>
          <QuoteCard />
          <Quotes />
          <Carousel />
          <Alert />
          <MDBContainer>
            <Comment />
          </MDBContainer>
          <AddComment />
        </div>
      </Router>
    );
  }
}

export default Homepage;
