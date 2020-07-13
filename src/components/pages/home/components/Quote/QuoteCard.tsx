import firebase from "firebase";
import flamelink from "flamelink";
import {
  MDBBtn, MDBCard,




  MDBCardBody, MDBCardGroup,


  MDBCardImage, MDBCardText, MDBCardTitle
} from "mdbreact";
import React, { useEffect, useState } from "react";
import "./style.css";
const firebaseApp = firebase;

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});
function QuoteCard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    try {
      const articles = app.content.get({ schemaKey: "articles" });
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded: (true);
          setPersons(result.data1.persons);
        });
    },
    error => {
          setError(error);
        }
      );
  });

if (error) {
  return <>Error: {error.message}</>;
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
                  <a href={person.person1.sourceurl}>{person.person3.source}</a>
                </MDBCardText>
                <MDBBtn color='primary' size='md' href={person.person1.gotourl}>
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
                  <a href={person.person2.sourceurl}>{person.person2.source}</a>
                </MDBCardText>
                <MDBBtn color='primary' size='md' href={person.person2.gotourl}>
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
                  <a href={person.person3.sourceurl}>{person.person3.source}</a>
                </MDBCardText>
                <MDBBtn color='primary' size='md' href={person.person3.gotourl}>
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

export default QuoteCard;
