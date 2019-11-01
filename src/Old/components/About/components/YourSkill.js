import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle
} from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className='mt-5 text-center'>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className='h2'>Your Contribution</MDBCardTitle>
              <p className='blue-text my-4 font-weight-bold'>
                Join us with your skill
              </p>
              <MDBCardText>
                If you have any skills from web devolopment,game build, content
                management and add content or no skill at all and like to work
                open source (free) and let world see you as worker in this group
                please consider joining to our devolopment team.
              </MDBCardText>
              <hr className='my-4' />
              <div className='pt-2'>
                <MDBCardText>
                  Contact us via - himadusirimanna.1@gmail.com
                </MDBCardText>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
