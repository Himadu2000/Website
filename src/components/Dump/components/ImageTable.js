import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView
} from "mdbreact";
import Image1 from "./Assets/Image4.webp";
import Image2 from "./Assets/Image5.webp";
import Image3 from "./Assets/Image6.webp";

const FeaturesPage = () => {
  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (
    <MDBCard
      className='my-5 px-5 mx-auto'
      style={{ fontWeight: 300, maxWidth: "90%" }}>
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className='h1-responsive font-weight-bold my-5 text-center'>
          Musicians and Actors
        </h2>
        <p className='dark-grey-text mx-auto mb-5 w-75 text-center'>
          These are mid 90's musicians and actors - Clark Gable, Shawn Mendes,
          Camila Cabello.
        </p>
        <MDBRow>
          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image1} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
            <div className='d-flex justify-content-between' style={newsStyle}>
              <MDBCol size='11' className='text-truncate pl-0 mb-3'>
                <a
                  href='https://en.wikipedia.org/wiki/Clark_Gable'
                  className='font-weight-bold'>
                  Clark Gable
                </a>
              </MDBCol>
              <a href='https://en.wikipedia.org/wiki/Clark_Gable'>
                <MDBIcon icon='angle-double-right' />
              </a>
            </div>{" "}
            <div className='d-flex justify-content-between' style={newsStyle}>
              Image source : By Movie studio -{" "}
              <a
                rel='nofollow'
                className='external text'
                href='http://www.ebay.com/itm/CLARK-GABLE-8x10-Glossy-B-W-Publicity-Portrait-Photo-/370201310807?pt=Art_Photo_Images&amp;hash=item5631b7b657'>
                eBay
              </a>
              , Public Domain,{" "}
              <a href='https://commons.wikimedia.org/w/index.php?curid=25860879'>
                Link
              </a>
            </div>
          </MDBCol>

          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image2} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
            <div className='d-flex justify-content-between' style={newsStyle}>
              <MDBCol size='11' className='text-truncate pl-0 mb-3'>
                <a
                  href='https://en.wikipedia.org/wiki/Shawn_Mendes'
                  className='font-weight-bold'>
                  Shawn Mendes
                </a>
              </MDBCol>
              <a href='https://en.wikipedia.org/wiki/Shawn_Mendes'>
                <MDBIcon icon='angle-double-right' />
              </a>
            </div>{" "}
            <div className='d-flex justify-content-between' style={newsStyle}>
              Image source : By{" "}
              <a
                rel='nofollow'
                className='external text'
                href='https://www.flickr.com/photos/raph_ph/page3'>
                Raph_PH
              </a>{" "}
              -{" "}
              <a
                rel='nofollow'
                className='external free'
                href='https://www.flickr.com/photos/raph_ph/26886316477/in/dateposted/'>
                flickr Raph
              </a>{" "}
              <a
                href='https://creativecommons.org/licenses/by/2.0'
                title='Creative Commons Attribution 2.0'>
                CC BY 2.0
              </a>{" "}
              <a href='https://commons.wikimedia.org/w/index.php?curid=69032677'>
                Link
              </a>
            </div>
          </MDBCol>

          <MDBCol md='12' lg='4' className='mb-lg-0 mb-5'>
            <MDBView hover rounded className='z-depth-1-half mb-4'>
              <img className='img-fluid' src={Image3} alt='' />
              <a href='#!'>
                <MDBMask overlay='white-slight' className='waves-light' />
              </a>
            </MDBView>
            <div className='d-flex justify-content-between' style={newsStyle}>
              <MDBCol size='11' className='text-truncate pl-0 mb-3'>
                <a href='#!' className='font-weight-bold'>
                  Camila Cabello
                </a>
              </MDBCol>
              <a href='#!'>
                <MDBIcon icon='angle-double-right' />
              </a>
            </div>{" "}
            <div className='d-flex justify-content-between' style={newsStyle}>
              Image source : By{" "}
              <a
                rel='nofollow'
                className='external text'
                href='https://vimeo.com/user62885533/'>
                Nicole Alexander
              </a>{" "}
              <a
                href='//commons.wikimedia.org/wiki/Category:Vimeo'
                title='Category:Vimeo'>
                Vimeo
              </a>{" "}
              <a
                rel='nofollow'
                className='external text'
                href='https://vimeo.com/286551669'>
                VMAs 2018 Time Capsule
              </a>{" "}
              <a
                href='https://creativecommons.org/licenses/by/3.0'
                title='Creative Commons Attribution 3.0'>
                CC BY 3.0
              </a>{" "}
              <a href='https://commons.wikimedia.org/w/index.php?curid=76909621'>
                Wikimedia
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default FeaturesPage;
