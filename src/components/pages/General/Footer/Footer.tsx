import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
  return (
    <MDBFooter
      color='#ec407a pink lighten-1'
      className='page-footer font-small lighten-5 pt-0'>
      {/* Default color : blue-grey */}
      <div style={{ backgroundColor: "#673ab7" }}>
        <MDBContainer>
          <MDBRow className='py-4 d-flex align-items-center'>
            <MDBCol
              md='6'
              lg='5'
              className='text-center text-md-left mb-4 mb-md-0'
            />
            <MDBCol md='6' lg='7' className='text-center text-md-right' />
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className='mt-5 mb-4 text-center text-md-left'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Dog Company</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>I created this website for share my work with you.</p>
            <p>
              <Link to='/TC' style={{ color: "blue" }}>
                Terms and Conditions
              </Link>
            </p>
            <p>
              <Link to='/PP' style={{ color: "green" }}>
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to='/Log' style={{ color: "yellow" }}>
                Change Log
              </Link>
            </p>
          </MDBCol>
          <MDBCol md='2' lg='2' xl='2' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Links</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              <MDBIcon icon='sitemap' />
              <Link to='/SiteMap' style={{ color: "black" }}>
                Site Map
              </Link>
            </p>
            <p>
              <a
                href='http://www.himadusirimannax.dx.am/About'
                className='dark-grey-text'>
                About
              </a>
            </p>
            <p>
              <a
                href='http://www.himadusirimannax.dx.am/Contact'
                className='dark-grey-text'>
                Contact
              </a>
            </p>
            <p>
              <a
                href='http://www.himadusirimannax.dx.am/Other/Nethaka'
                className='dark-grey-text'>
                More
              </a>
            </p>
          </MDBCol>
          <MDBCol md='3' lg='2' xl='2' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Useful links</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />
            <p>
              <a
                href='http://www.testwritingmyname.dx.am'
                className='dark-grey-text'>
                Home Page
              </a>
            </p>
            <p>
              <a
                href='http://www.himadusirimannax.dx.am'
                className='dark-grey-text'>
                Secondry Site
              </a>
            </p>
            <p>
              <a
                href='http://www.himadusirimanna.getenjoyment.net'
                className='dark-grey-text'>
                My Media
              </a>
            </p>
            <p>
              <a
                href='http://www.himadusirimannagame.atwebpages.com'
                className='dark-grey-text'>
                Games
              </a>
            </p>
          </MDBCol>
          <MDBCol md='4' lg='3' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Contact</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: "60px" }}
            />

            <p>
              <i className='fa fa-home mr-3' /> Colombo, SL
            </p>

            <p>
              <i className='fa fa-envelope mr-3' /> himadusirimanna.1@gmail.com
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}/{new Date().getMonth()} /
          {new Date().getDay()} Copyright:
          <a href='http://www.testwritingmyname.dx.am'>
            Himadu Sirimanna Last Updated: {new Date().getFullYear()}/
            {new Date().getMonth()} /27 (Updated at least in Month/Week)
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
