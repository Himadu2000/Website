import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";
import Alert from "./components/Alert";

const Privacy = () => {
  return (
    <MDBContainer>
      <Alert />
      <MDBIframe src='https://docs.google.com/document/d/e/2PACX-1vQMtuAcIGi3hi2lF3cgEghiNHbxT4RVD4i8cblCQX6jWIfRZnUUuEZ7YIQeDEgHFQ1gEcP-7JMgXbyQ/pub?embedded=true'></MDBIframe>
    </MDBContainer>
  );
};

export default Privacy;
