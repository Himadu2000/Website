import { MDBCard, MDBCol, MDBIcon, MDBRow } from "mdbreact"
import React from "react"

const LogPage = () => {
  return (
    <ul>
      <li style={{ listStyleType: "none" }}>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Our Website Log
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            This is our website change log.
          </p>
          <MDBRow>
            <MDBCol md="12" className="mb-4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: "url({log.url})",
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <>
                    <h6 className="purple-text">
                      <MDBIcon icon="sync" />
                      <strong>Log</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>title</strong>
                    </h3>
                    <p className="pb-3">info</p>
                  </>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </li>
    </ul>
  )
}

export default LogPage
