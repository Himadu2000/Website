import axios from "axios"
import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdbreact"
import React, { FormEvent, useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("Empty")
  const [phone, setPhone] = useState("Empty")
  const [company, setCompany] = useState("Empty")
  const [message, setMessage] = useState("")

  function resetForm() {
    setName("")
    setEmail("")
    setAddress("")
    setPhone("")
    setCompany("")
    setMessage("")
  }

  function formHandle(event: FormEvent) {
    const messageData = { name, email, address, phone, company, message }
    event.preventDefault()
    axios({
      method: "POST",
      url: "https://ansi.herokuapp.com/contact",
      data: messageData,
    }).then(response => {
      if (response.status == 200) {
        alert("Message Sent. Thank you for using ANSIGLOBAL")
        resetForm()
      } else {
        alert("Message failed to send. (Sorry for inconvenience)")
      }
    })
  }

  return (
    <>
      <MDBCol>
        <MDBCardBody className="form">
          <form onSubmit={formHandle} autoComplete="on">
            <h3 className="mt-4" color="blue">
              <MDBIcon icon="envelope" className="pr-2" color="blue" />
              Write to me:
            </h3>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-name"
                    label="Your name"
                    name="name"
                    value={name}
                    onChange={event => setName(event.currentTarget.value)}
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-email"
                    label="Your email"
                    name="email"
                    value={email}
                    onChange={event => setEmail(event.currentTarget.value)}
                    required
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="form-contact-message"
                    label="Your message"
                    name="message"
                    value={message}
                    onChange={event => setMessage(event.currentTarget.value)}
                    required
                  />
                  <MDBBtn rounded color="blue" type="submit">
                    <MDBIcon icon="paper-plane" />
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCol>
    </>
  )
}

export default Contact
