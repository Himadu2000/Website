import { MDBContainer } from "mdbreact"
import React from "react"
import Comment from "./components//Comment/Comment"
// import QuoteCard from "./components/Quote/QuoteCard";
import Alert from "./components/Alert"
import Carousel from "./components/Carousel"
import AddComment from "./components/Comment/AddComment"
import Quotes from "./components/Quote/Quotes"

const Homepage = () => (
  <>
    {/** <QuoteCard /> */}
    <Quotes />
    <Carousel />
    <Alert />
    <MDBContainer>
      <Comment />
    </MDBContainer>
    <AddComment />
  </>
)

export default Homepage
