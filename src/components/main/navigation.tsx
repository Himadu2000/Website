import { Link } from "gatsby"
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact"
import React, { useState } from "react"

const NavList = () => (
  <>
    <Link to="/blog" className="white-text">
      Blog
    </Link>{" "}
    <Link to="/news" className="white-text">
      News
    </Link>{" "}
    <Link to="/articles" className="white-text">
      Articles
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/contact" className="white-text">
      Contact
    </Link>{" "}
    <Link to="/user" className="white-text">
      User
    </Link>
  </>
)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">
          <Link to="/" style={{ color: "white" }}>
            Himadu
          </Link>
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <NavList />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar
