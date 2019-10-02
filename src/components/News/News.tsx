import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const ProjectsPage = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Our News</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>orum.</p>

      <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
            }}>
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='purple-text'>
                  <MDBIcon icon='plane' />
                  <strong> Chat</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is title</strong>
                </h3>
                <p className='pb-3'>dolorum!</p>
                <MDBBtn color='secondary' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> News
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
            }}>
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='pink-text'>
                  <MDBIcon icon='chart-pie' />
                  <strong> Vedeo</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is title</strong>
                </h3>
                <p className='pb-3'>dolorum!</p>
                <MDBBtn color='pink' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> News
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
            }}>
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='green-text'>
                  <MDBIcon icon='eye' />
                  <strong> Games</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong> the title</strong>
                </h3>
                <p className='pb-3'>Losarem</p>
                <MDBBtn color='success' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> News
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default ProjectsPage;
