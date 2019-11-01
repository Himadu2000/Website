import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <span className='counter'>22</span>
      <MDBBtn social='gplus'>
        <MDBIcon fab icon='google-plus-g' className='pr-1' /> Google +
      </MDBBtn>
      <span className='counter'>22</span>

      <span className='counter'>22</span>
      <MDBBtn social='yt'>
        <MDBIcon fab icon='youtube' className='pr-1' /> Youtube
      </MDBBtn>
      <span className='counter'>22</span>

      <span className='counter'>22</span>
      <MDBBtn social='so'>
        <MDBIcon fab icon='stack-overflow' className='pr-1' /> Stack Overflow
      </MDBBtn>
      <span className='counter'>22</span>
      <MDBBtn social='slack'>
        <MDBIcon fab icon='slack' className='pr-1' /> Slack
      </MDBBtn>
      <span className='counter'>22</span>
      <MDBBtn social='git'>
        <MDBIcon fab icon='github' className='pr-1' /> Github
      </MDBBtn>
      <span className='counter'>22</span>
      <MDBBtn social='comm'>
        <MDBIcon icon='comments' className='pr-1' /> Comments
      </MDBBtn>
      <span className='counter'>22</span>
      <MDBBtn social='email'>
        <MDBIcon icon='envelope' className='pr-1' /> Email
      </MDBBtn>
      <span className='counter'>22</span>
    </MDBContainer>
  );
};

export default SocialButtonsPage;
