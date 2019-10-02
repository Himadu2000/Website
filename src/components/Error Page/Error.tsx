import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import BackgroundImage from "./../../assets/Gradient.svg";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className='text-white text-center py-5 px-4 my-5'
              style={{
                backgroundImage: "url(" + BackgroundImage + ")"
              }}>
              <MDBCol className='py-5'>
                <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                  Sorry, your page was not found.
                  <br /> Sorry for inconvenience.
                </MDBCardTitle>
                <p className='mx-5 mb-5'>
                  Please use our Navigation to return to a working page.
                </p>
                <MDBBtn
                  outline
                  color='white'
                  className='mb-5'
                  href='http://www.himadusirimannax.dx.am'>
                  <MDBIcon icon='clone' className='mr-2' />
                  Go to Home Page
                </MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
