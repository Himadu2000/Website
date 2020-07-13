import { MDBAlert, MDBContainer, MDBIcon } from "mdbreact"
import React from "react"
import "./Alerts.sass"

const AlertPage = () => (
  <>
    <MDBContainer>
      <MDBAlert color="primary" className="Margin">
        We have a login check it out! from above
        <MDBIcon icon="sign-in-alt" /> and a Downloads Page.
      </MDBAlert>
      <MDBAlert color="success" className="Margin">
        Do you want a website <MDBIcon icon="file-alt" /> Contact Me.
      </MDBAlert>
    </MDBContainer>
  </>
)

export default AlertPage
