import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
} from "mdbreact"
import React from "react"

const PanelPage = props => {
  return (
    <MDBContainer>
      <MDBCard className="text-center">
        <MDBCardHeader color="success-color">
          Android <MDBIcon fab icon="android" /> APP
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>
            Download the Android App <MDBIcon fab icon="android" />
          </MDBCardTitle>
          <MDBCardText>Download the android app of my website.</MDBCardText>
          <a href="https://bit.ly/319bXrc" download="Himadu">
            Download
          </a>
        </MDBCardBody>
        <MDBCardFooter color="success-color">
          Latest update : 19/08/27
        </MDBCardFooter>
      </MDBCard>
      <MDBCard className="text-center">
        <MDBCardHeader color="success-color">
          C <MDBIcon fab icon="android" /> Inventory
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>
            Download the C Inventory
            <MDBIcon fab icon="android" />
          </MDBCardTitle>
          <MDBCardText>Download the C inventory program I created.</MDBCardText>
          <a
            href="https://drive.google.com/open?id=115tBNfdvgV-NzJ8CLykrjaOxSOr3w8jD"
            download="Himadu"
          >
            Download
          </a>
        </MDBCardBody>
        <MDBCardFooter color="success-color">
          Latest update : 19/10/12
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  )
}

export default PanelPage
