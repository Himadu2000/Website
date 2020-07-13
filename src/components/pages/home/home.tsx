import { MDBContainer } from "mdbreact"
import React from "react"
import Alert from "./components/alert"
import Carousel from "./components/carousel"
import AddComment from "./components/Comment/addComment"
import Comment from "./components/Comment/comment"
import Quotes from "./components/Quote/Quotes"
// import QuoteCard from "./components/Quote/QuoteCard";

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
