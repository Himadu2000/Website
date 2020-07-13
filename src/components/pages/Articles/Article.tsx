import {
  MDBAlert,
  MDBBtn,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBJumbotron,
  MDBRow,
} from "mdbreact"
import React, { useEffect, useState } from "react"

const Article = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setArticles(result.data1.articles)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.error(error)
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <>Error: {error.message}</>
  } else if (!isLoaded) {
    return (
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else {
    return (
      <>
        <MDBAlert color="danger" className="Margin">
          Thank you for providing data by <MDBIcon icon="space-shuttle" />
          NASA.
        </MDBAlert>
        <ul>
          {articles.map(article => (
            <li key={article.id} style={{ listStyleType: "none" }}>
              <MDBContainer className="mt-5 text-center">
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron className="p-0">
                      <MDBCardImage className="img-fluid" src={article.url} />
                      <MDBCardBody>
                        <MDBCardTitle className="h3">
                          {article.title} : {article.date}
                        </MDBCardTitle>
                        <MDBCardText>
                          {article.explanation}
                          <br />
                          Copyright : {article.copyright}
                        </MDBCardText>
                        <MDBBtn href={article.hdurl} gradient="purple" rounded>
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
    )
  }
}

export default Article
