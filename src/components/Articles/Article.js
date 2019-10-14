import React, { useState, useEffect } from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBAlert,
  MDBIcon
} from "mdbreact";

import flamelink from "flamelink";
import firebase from "firebase";

const firebaseApp = firebase;

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

function ArticlePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  app.content
    .get("articles")
    .then(articles => console.log("Articles:", articles))
    .then(res => res.json())
    .then(result => {
      setArticles(articles);
    })
    .catch(error =>
      console.error(
        "Something went wrong while retrieving all the content. Details:",
        error
      )
    );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    console.log(articles);
    return (
      <center>
        <div className='spinner-grow text-success' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </center>
    );
  } else {
    console.log(articles);
    return (
      <>
        <MDBAlert color='danger' className='Margin'>
          <center>
            Thank you for providing data by <MDBIcon icon='space-shuttle' />
            {""}
            NASA.
          </center>
        </MDBAlert>
        <ul>
          {articles.map(article => (
            <li key={article.id} style={{ listStyleType: "none" }}>
              {" "}
              <MDBContainer className='mt-5 text-center'>
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron className='p-0'>
                      <MDBCardImage className='img-fluid' src={article.image} />
                      <MDBCardBody>
                        <MDBCardTitle className='h3'>
                          {article.title} : {article.date}
                        </MDBCardTitle>
                        <MDBCardText>
                          {article.content}
                          <br />
                          Copyright :
                          <link href={article.copyrightLink}>
                            {article.copyright}
                          </link>
                        </MDBCardText>
                        <MDBBtn
                          href={article.readMore}
                          gradient='purple'
                          rounded>
                          Read More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ArticlePage;
