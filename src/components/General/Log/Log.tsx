import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon } from "mdbreact";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logs: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            logs: result.data1.logs
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, logs } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <center>
          <div className='spinner-grow text-success' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </center>
      );
    } else {
      return (
        <ul>
          {logs.map(log => (
            <li key={log.id} style={{ listStyleType: "none" }}>
              <section className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold my-5'>
                  Our Website Log
                </h2>
                <p className='grey-text w-responsive mx-auto mb-5'>
                  This is our website change log.
                </p>
                <MDBRow>
                  <MDBCol md='12' className='mb-4'>
                    <MDBCard
                      className='card-image'
                      style={{
                        backgroundImage: "url({log.url})"
                      }}>
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
                        <div>
                          <h6 className='purple-text'>
                            <MDBIcon icon='sync' />
                            <strong>Log</strong>
                          </h6>
                          <h3 className='py-3 font-weight-bold'>
                            <strong>{log.title}</strong>
                          </h3>
                          <p className='pb-3'>{log.info}</p>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </section>
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default ProjectsPage;
