import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdbreact"
import React from "react"

const Donate = () => (
  <>
    <MDBContainer>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
        <MDBCardHeader color="primary-color" tag="h3">
          Donation
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Donate Us</MDBCardTitle>
          <MDBCardText>
            It takes lots of time and money to build and maintain website, game,
            content and more. It would be very genourous if you could donate us
            via paypal.
          </MDBCardText>
          <MDBBtn
            href="https://www.paypal.me/himadu1"
            target="_blank"
            color="secondary"
          >
            Donate via PayPal
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </>
)

export default Donate
