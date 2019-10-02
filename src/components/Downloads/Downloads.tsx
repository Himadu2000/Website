import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBContainer,
  MDBIcon
} from "mdbreact";

const PanelPage = props => {
  return (
    <MDBContainer>
      <MDBCard className='text-center'>
        <MDBCardHeader color='success-color'>
          Android <MDBIcon fab icon='android' /> APP
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>
            Download the Android App <MDBIcon fab icon='android' />
          </MDBCardTitle>
          <MDBCardText>Download the android app of my website.</MDBCardText>
          <a href=' https://bit.ly/319bXrc' download='Himadu'>
            Download
          </a>
        </MDBCardBody>
        <MDBCardFooter color='success-color'>
          {" "}
          {/**Add C Program here */}
          Latest update : 19/08/27
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
};

export default PanelPage;
