import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import Image1 from "./Assets/Image1.webp";
import Image2 from "./Assets/Image2.webp";
import Image3 from "./Assets/Image3.webp";

const FeaturesPage = () => {
  return (
    <MDBCard
      className='my-5 px-5 mx-auto'
      style={{ fontWeight: 300, maxWidth: "90%" }}>
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className='h1-responsive font-weight-bold my-5 text-center'>
          Marilyn Monroe
        </h2>
        <p className='dark-grey-text mx-auto mb-5 w-75 text-center'>
          This is Marilyn Monroe. She's an old actress on Hollywood but she had
          a great time in past because of her movies and her beauty.
        </p>
        <MDBRow>
          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image1} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
            <MDBRow className='mb-3' />
            <MDBBtn
              gradient='aqua'
              href='https://en.wikipedia.org/wiki/Marilyn_Monroe'>
              Read More
            </MDBBtn>
          </MDBCol>

          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image2} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
          </MDBCol>

          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image3} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default FeaturesPage;
