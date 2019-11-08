import React, { Fragment } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBContainer
} from "mdbreact";

const Donate = () => {
  return (
    <Fragment>
      <MDBContainer>
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
          <MDBCardHeader color='primary-color' tag='h3'>
            Donation
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Donate Us</MDBCardTitle>
            <MDBCardText>
              It takes lots of time and money to build and maintain website,
              game, content and more. It would be very genourous if you could
              donate us via paypal.
            </MDBCardText>
            <MDBBtn
              href='https://www.paypal.me/himadu1'
              target='_blank'
              color='secondary'>
              Donate via PayPal
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Fragment>
  );
};

export default Donate;
