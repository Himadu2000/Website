import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact"
import React from "react"

const Footer = () => (
  <MDBFooter color="black" className="font-small pt-4">
    <MDBContainer className="text-center text-md-left">
      <MDBRow className="text-center text-md-left mt-3 pb-3">
        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i className="fa fa-home mr-3" /> 115/8, Mattegoda Terrace,
            Mattegoda, 10240 Sri Lanka.
          </p>
          <p>
            <i className="fa fa-envelope mr-3" /> himadusirimanna.1@gmail.com
          </p>
          <p>
            <i className="fa fa-phone mr-3" /> +94 11 278 3615
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBFooter>
)

export default Footer
