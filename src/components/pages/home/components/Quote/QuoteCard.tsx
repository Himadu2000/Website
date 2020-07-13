import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact"
import React, { useEffect, useState } from "react"
import "./style.sass"

const QuoteCard = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true)
        setPersons(result.data1.persons)
      })
      .catch(error => setError(error))
  })

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
      <ul className="cards">
        {persons.map(person => (
          <li key={person.id} style={{ listStyleType: "none" }}>
            <MDBCardGroup>
              <MDBCard>
                <MDBCardImage
                  src={person.person1.url}
                  alt="MDBCard image cap"
                  top
                  hover
                  overlay="white-slight"
                />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">{person.person1.title}</MDBCardTitle>
                  <MDBCardText>
                    {person.person1.data}
                    <br />
                    Source:{" "}
                    <a href={person.person1.sourceurl}>
                      {person.person3.source}
                    </a>
                  </MDBCardText>
                  <MDBBtn
                    color="primary"
                    size="sm"
                    href={person.person1.gotourl}
                  >
                    read more
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

              <MDBCard>
                <MDBCardImage
                  src={person.person2.url}
                  alt="MDBCard image cap"
                  top
                  hover
                  overlay="white-slight"
                />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">{person.person2.title}</MDBCardTitle>
                  <MDBCardText>
                    {person.person2.data}
                    <br />
                    Source:{" "}
                    <a href={person.person2.sourceurl}>
                      {person.person2.source}
                    </a>
                  </MDBCardText>
                  <MDBBtn
                    color="primary"
                    size="sm"
                    href={person.person2.gotourl}
                  >
                    read more
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

              <MDBCard>
                <MDBCardImage
                  src={person.person3.url}
                  alt="MDBCard image cap"
                  top
                  hover
                  overlay="white-slight"
                />
                <MDBCardBody>
                  <MDBCardTitle tag="h5">{person.person3.title}</MDBCardTitle>
                  <MDBCardText>
                    {person.person3.data}
                    <br />
                    Source:{" "}
                    <a href={person.person3.sourceurl}>
                      {person.person3.source}
                    </a>
                  </MDBCardText>
                  <MDBBtn
                    color="primary"
                    size="sm"
                    href={person.person3.gotourl}
                  >
                    read more
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </li>
        ))}
      </ul>
    )
  }
}

export default QuoteCard
