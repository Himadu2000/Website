import React from "react";
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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            articles: result.data1.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <center>
          <div className='spinner-grow text-success' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </center>
      );
    } else {
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
                        <MDBCardImage className='img-fluid' src={article.url} />
                        <MDBCardBody>
                          <MDBCardTitle className='h3'>
                            {article.title} : {article.date}
                          </MDBCardTitle>
                          <MDBCardText>
                            {article.explanation}
                            <br />
                            Copyright : {article.copyright}
                          </MDBCardText>
                          <MDBBtn
                            href={article.hdurl}
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
}
export default MyComponent;
