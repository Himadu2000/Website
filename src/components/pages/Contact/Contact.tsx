import { MDBAnimation, MDBCard, MDBCol, MDBRow } from "mdbreact"
import React from "react"
import Bottom from "./components/details"
import Top from "./components/form"
import "./components/style.sass"

const contactPage = () => (
  <section className="contact-section" style={{ maxWidth: "98%" }}>
    <MDBCard>
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeInRight" delay=".3s">
            <MDBCard id="classic-card">
              <Top />
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <Bottom />
      </MDBRow>
    </MDBCard>
  </section>
)

export default contactPage
