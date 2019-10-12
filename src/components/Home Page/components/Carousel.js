import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBIcon,
  MDBAlert
} from "mdbreact";

class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      carousel: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            carousel: result.data1.carousel
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
    const { error, isLoaded, carousel } = this.state;
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
        <>
          <MDBAlert color='danger' className='Margin'>
            <center>
              Updating data by <MDBIcon icon='hands-helping' /> Collaborators.
            </center>
          </MDBAlert>
          <ul>
            {carousel.map(image => (
              <li key={image.id} style={{ listStyleType: "none" }}>
                {" "}
                <MDBContainer>
                  <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className='z-depth-1'>
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId='1'>
                        <MDBView>
                          <img
                            className='d-block w-100'
                            src={image.photo1.url}
                            alt={image.photo1.alt}
                          />
                          <MDBMask overlay='black-light' />
                        </MDBView>
                        <MDBCarouselCaption>
                          <h3 className='h3-responsive'>
                            {image.photo1.title}
                          </h3>
                          <p>
                            {image.photo1.info} (Source:{" "}
                            {image.photo1.copyright})
                          </p>
                        </MDBCarouselCaption>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId='2'>
                        <MDBView>
                          <img
                            className='d-block w-100'
                            src={image.photo2.url}
                            alt={image.photo2.alt}
                          />
                          <MDBMask overlay='black-light' />
                        </MDBView>
                        <MDBCarouselCaption>
                          <h3 className='h3-responsive'>
                            {image.photo2.title}
                          </h3>
                          <p>
                            {image.photo2.info} (Source:{" "}
                            {image.photo2.copyright})
                          </p>
                        </MDBCarouselCaption>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId='3'>
                        <MDBView>
                          <img
                            className='d-block w-100'
                            src={image.photo3.url}
                            alt={image.photo3.alt}
                          />
                          <MDBMask overlay='black-light' />
                        </MDBView>
                        <MDBCarouselCaption>
                          <h3 className='h3-responsive'>
                            {image.photo3.title}
                          </h3>
                          <p>
                            {image.photo3.info} (Source:{" "}
                            {image.photo3.copyright})
                          </p>
                        </MDBCarouselCaption>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default CarouselPage;
