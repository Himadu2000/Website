import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer
} from "mdbreact";

import flamelink from "flamelink";
import firebase from "firebase";
/*
const firebaseApp = firebase;

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

var db = firebase.firestore();
{
 app.content.add({
  schemaKey: "contactUs",
  data: {
    name: "Dog",
    email: "himadusirimanna.1@gmail.com",
    phone: "0761081203",
    company: "Dog",
    message: "Message"
  }
}); 
*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className='contact-section my-5'>
          <MDBContainer>
            <MDBCard>
              <MDBRow>
                <MDBCol lg='8'>
                  <MDBCardBody className='form'>
                    <h3 className='mt-4'>
                      <MDBIcon icon='envelope' className='pr-2' />
                      Write to us:
                    </h3>
                    <MDBRow>
                      <MDBCol md='6'>
                        <div className='md-form mb-0'>
                          <MDBInput
                            type='text'
                            id='form-contact-name'
                            label='Your name'
                            value={this.state.value}
                            onChange={this.handleChange}
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md='6'>
                        <div className='md-form mb-0'>
                          <MDBInput
                            type='text'
                            id='form-contact-email'
                            label='Your email'
                            value={this.state.value}
                            onChange={this.handleChange}
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <div className='md-form mb-0'>
                          <MDBInput
                            type='text'
                            id='form-contact-phone'
                            label='Your phone'
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md='6'>
                        <div className='md-form mb-0'>
                          <MDBInput
                            type='text'
                            id='form-contact-company'
                            label='Your company'
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                        <div className='md-form mb-0'>
                          <MDBInput
                            type='textarea'
                            id='form-contact-message'
                            label='Your message'
                          />
                          <MDBBtn rounded color='blue' type='submit'>
                            <MDBIcon icon='paper-plane' />
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg='4'>
                  <MDBCardBody className='contact text-center h-100 pink-text'>
                    <h3 className='my-4 pb-2'>Contact Information</h3>
                    <ul className='text-lg-left list-unstyled ml-4'>
                      <li>
                        <p>
                          <MDBIcon icon='map-marker-alt' className='pr-2' />
                          SL, Colombo
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon='envelope' className='pr-2' />
                          himadusirimanna@gmail.com
                        </p>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </section>
      </form>
    );
  }
}

export default Form;
