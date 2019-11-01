import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='12'>
          <p className='h5 text-center mb-4'>
            Write your comment about Manidu Nethaka for improvement
          </p>

          <div className='text-center'>
            <MDBBtn outline color='secondary' href='http://www.Dog.com'>
              Add a comment <MDBIcon far icon='paper-plane' className='ml-1' />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
