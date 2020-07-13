import { MDBCardBody, MDBCol, MDBIcon } from "mdbreact"
import React from "react"

const Bottom = () => (
  <MDBCol lg="4">
    <MDBCardBody className="contact text-center h-100 light-green-text">
      <h3 className="my-4 pb-2">Contact information</h3>
      <ul className="text-lg-left list-unstyled ml-4">
        <li>
          <p>
            <MDBIcon icon="map-marker-alt" className="pr-2" />
          </p>
          <p>
            115/8, <br /> Mattegoda Terrace,
            <br /> Mattegoda, 10240 <br /> Sri Lanka.
          </p>
        </li>
        <li>
          <p>
            <MDBIcon icon="phone" className="pr-2" />
            +94 11 278 3615
          </p>
        </li>
        <li>
          <p>
            <MDBIcon icon="envelope" className="pr-2" />
            himadusirimanna.1@gmail.com
          </p>
        </li>
      </ul>
      <hr className="hr-light my-4" />
    </MDBCardBody>
  </MDBCol>
)

export default Bottom
