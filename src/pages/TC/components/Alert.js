import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn } from "mdbreact";

const AlertPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color='secondary' className='Margin'>
        <center>
          Here is the shared document of Term and Condition{" "}
          <MDBIcon icon='user-secret' /> {""}
          <MDBBtn href='https://docs.google.com/document/d/1tC5lOcJ6N5kVQdgsmP81s6y2dj-37ZizrndLLu3rFbI/edit?usp=sharing'>
            Document
          </MDBBtn>
        </center>
      </MDBAlert>
    </MDBContainer>
  );
};

export default AlertPage;
