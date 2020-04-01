import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

const Button = () => {
  return (
    <center>
      <MDBBtn
        outline
        color='green'
        className='mb-5'
        href='http://www.himadusirimannax.dx.am'>
        <MDBIcon icon='clone' className='mr-2' /> Home Page
      </MDBBtn>
    </center>
  );
};
export default Button;
