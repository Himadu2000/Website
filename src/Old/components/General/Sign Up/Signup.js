import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class FormsPage extends React.Component {
  state = {
    fname: "Cat",
    lname: "Dog",
    email: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <center>
          <form
            className='needs-validation'
            onSubmit={this.submitHandler}
            noValidate>
            <MDBRow>
              <MDBCol md='4'>
                <MDBInput
                  value={this.state.fname}
                  name='fname'
                  onChange={this.changeHandler}
                  type='text'
                  id='materialFormRegisterNameEx'
                  label='First name'
                  required>
                  <div className='valid-tooltip'>Looks good!</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='4'>
                <MDBInput
                  value={this.state.lname}
                  name='lname'
                  onChange={this.changeHandler}
                  type='text'
                  id='materialFormRegisterEmailEx2'
                  label='Last name'
                  required>
                  <div className='valid-tooltip'>Looks good!</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='4'>
                <MDBInput
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type='email'
                  id='materialFormRegisterConfirmEx3'
                  name='email'
                  label='Your Email address'></MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBBtn color='success' type='submit'>
              Submit Form
            </MDBBtn>
          </form>
          <MDBBtn id='btnSignUpGoogle'>Sign Up With Google</MDBBtn>
          <MDBBtn id='btnSignUpPhone'>Sign Up With Phone Number</MDBBtn>
          <MDBBtn id='btnSignUpGitHub'>Sign Up With GitHub</MDBBtn>
          <MDBBtn id='btnSignUpMicrosoft'>Sign Up With Microsoft</MDBBtn>
          <MDBBtn id='btnSignUpAnonymous'>Sign Up With Anonymous</MDBBtn>
        </center>
      </div>
    );
  }
}

export default FormsPage;
