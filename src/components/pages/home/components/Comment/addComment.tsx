import { firestore } from "gatsby-theme-firebase"
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact"
import React from "react"
const db = firestore.app
const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <p className="h5 text-center mb-4">
            Write your comment about this website for improvement
          </p>

          <div className="text-center">
            <MDBBtn outline color="secondary" href="http://www.Dog.com">
              Add a comment <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FormPage
