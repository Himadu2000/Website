import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn } from "mdbreact";
import "./Alerts.css";

const AlertPage = () => {
  return (
    <div>
      <MDBAlert color='danger' className='Margin'>
        <center>
          Our links have brocken down (Sorry for inconvienience){" "}
          <MDBIcon fab icon='internet-explorer' /> {""}
          Below you can find our links for temporary use...
        </center>
      </MDBAlert>
      <center>
        <MDBBtn href='https://fir-32d38.web.app/'>
          Chat (Important feature) please check. Note for Administrator... Check
          on Download and Navigation Pages.... Delete this when done...
          (Comments)
        </MDBBtn>
      </center>

      <MDBContainer>
        <MDBAlert color='primary' className='Margin'>
          <center>
            We have a login check it out! from above{" "}
            <MDBIcon icon='sign-in-alt' /> {""}
            and a Downloads Page.
          </center>
        </MDBAlert>
        <MDBAlert color='success' className='Margin'>
          <center>
            Do you want a website <MDBIcon fab icon='internet-explorer' /> {""}
            Contact Me.
          </center>
        </MDBAlert>
      </MDBContainer>
    </div>
  );
};

export default AlertPage;
