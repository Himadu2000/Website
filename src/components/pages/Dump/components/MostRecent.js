import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const IframePage = () => {
  return (
    <>
      <h2
        className='h2-responsive text-center lime-text'
        style={{ padding: 60 }}>
        Check out my new song on YouTube
      </h2>
      <MDBContainer className='text-center' style={{ padding: 10 }}>
        <MDBIframe src='https://www.youtube.com/embed/0-7BIZ66imw' />
      </MDBContainer>
    </>
  );
};

export default IframePage;
