import React from "react";
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
import Logo from "./Assets/Logo.svg";

class HoverPage extends React.Component {
  render() {
    return (
      <MDBContainer className='mt-5 rounded mx-auto d-block'>
        <a href='https://www.youtube.com/channel/UCUMfUAnQ_af9fV26ukmWG6g'>
          <MDBView hover>
            <img
              src={Logo}
              className='flex-center img-fluid z-depth-1 rounded-circle hoverable rounded mx-auto d-block'
              alt='Logo of Manidu'
            />
            <MDBMask className='flex-center'>
              <p className='white-text'>Manidu Nethaka</p>
            </MDBMask>
          </MDBView>
        </a>
      </MDBContainer>
    );
  }
}

export default HoverPage;
