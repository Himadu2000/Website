import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./components/Carousel";
import Comment from "./components//Comment/Comment";
import AddComment from "./components/Comment/AddComment";
import { MDBContainer } from "mdbreact";
import Quotes from "./components/Quote/Quotes";
import QuoteCard from "./components/Quote/QuoteCard";
import Alert from "./components/Alert";
import flamelink from "flamelink";
import firebase from "firebase";

const firebaseApp = firebase;

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

class Homepage extends Component {
  async componentDidMount() {
    try {
      const products = await app.content.get({ schemaKey: "articles" });
      console.log("All of your products:", products);
    } catch (error) {
      console.log(error);
    }
  }
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
