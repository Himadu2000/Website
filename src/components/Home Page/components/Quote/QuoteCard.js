import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardGroup,
  MDBCardText,
  MDBCardBody,
  MDBCardImage
} from "mdbreact";
import "./style.css";

class CardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      persons: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            persons: result.data1.persons
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
    const { error, isLoaded, persons } = this.state;
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
        <ul className='cards'>
          {persons.map(person => (
            <li key={person.id} style={{ listStyleType: "none" }}>
              <MDBCardGroup>
                <MDBCard>
                  <MDBCardImage
                    src={person.person1.url}
                    alt='MDBCard image cap'
                    top
                    hover
                    overlay='white-slight'
                  />
                  <MDBCardBody>
                    <MDBCardTitle tag='h5'>{person.person1.title}</MDBCardTitle>
                    <MDBCardText>
                      {person.person1.data}
                      <br />
                      Source:{" "}
                      <a href={person.person1.sourceurl}>
                        {person.person3.source}
                      </a>
                    </MDBCardText>
                    <MDBBtn
                      color='primary'
                      size='md'
                      href={person.person1.gotourl}>
                      read more
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard>
                  <MDBCardImage
                    src={person.person2.url}
                    alt='MDBCard image cap'
                    top
                    hover
                    overlay='white-slight'
                  />
                  <MDBCardBody>
                    <MDBCardTitle tag='h5'>{person.person2.title}</MDBCardTitle>
                    <MDBCardText>
                      {person.person2.data}
                      <br />
                      Source:{" "}
                      <a href={person.person2.sourceurl}>
                        {person.person2.source}
                      </a>
                    </MDBCardText>
                    <MDBBtn
                      color='primary'
                      size='md'
                      href={person.person2.gotourl}>
                      read more
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard>
                  <MDBCardImage
                    src={person.person3.url}
                    alt='MDBCard image cap'
                    top
                    hover
                    overlay='white-slight'
                  />
                  <MDBCardBody>
                    <MDBCardTitle tag='h5'>{person.person3.title}</MDBCardTitle>
                    <MDBCardText>
                      {person.person3.data}
                      <br />
                      Source:{" "}
                      <a href={person.person3.sourceurl}>
                        {person.person3.source}
                      </a>
                    </MDBCardText>
                    <MDBBtn
                      color='primary'
                      size='md'
                      href={person.person3.gotourl}>
                      read more
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardGroup>
            </li>
          ))}
        </ul>
      );
    }
  }
}
{
  /** {" "}
   */
}
export default CardExample;
