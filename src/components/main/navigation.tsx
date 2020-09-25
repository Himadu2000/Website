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
    <MDBNavItem>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/news" className="nav-link">
        News
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/articles" className="nav-link">
        Articles
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/gallery" className="nav-link">
        Gallery
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/downloads" className="nav-link">
        Downloads
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/donations" className="nav-link">
        Donations
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/sitemap" className="nav-link">
        Sitemap
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/pp" className="nav-link">
        PP
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/tc" className="nav-link">
        TC
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </MDBNavItem>
    <MDBNavItem>
      <Link to="/user" className="nav-link">
        User
      </Link>
    </MDBNavItem>
  </>
)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong>
          <Link to="/" className="white-text">
            Himadu
          </Link>
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <NavList />
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar
