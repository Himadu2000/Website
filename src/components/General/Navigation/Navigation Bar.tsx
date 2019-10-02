import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import ReactSearchBox from "react-search-box";
const history = require("history").createBrowserHistory();

const Navbar = props => {
  const [error, seterror] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [data, setdata] = useState([]);

  const toggleCollapse = () => {
    setisOpen({ isOpen });
  };

  const datas = [
    {
      key: "Himadu",
      value: "Himadu Sirimanna"
    },
    {
      key: "Santhusha",
      value: "Santhusha the Idiota"
    }
  ];

  {
    /*
  useEffect(() => {

    fetch("https://my-json-server.typicode.com/Himadu2000/data/db")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result.data1.searchbar
          });
          this.data = this.state.data;
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
    };

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
  
      render() {
      const { error, isLoaded } = this.state;
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
      */
  }

  return (
    <MDBNavbar color='#1c2a48 mdb-color darken-3' dark expand='md'>
      {/* Default color was : default-color */}
      <MDBNavbarBrand>
        <strong className='white-text'>Hello</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to='/'>Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/Blog'>Blog</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/Articles'>Articles</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/News'>News</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/Downloads'>Downloads</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/Contact'>Contact</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='About'>About</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <ReactSearchBox
            placeholder='Search'
            value='Empty'
            data={datas}
            callback={record => console.log(record)}
          />
          <MDBNavItem>
            <MDBNavLink onClick={() => history.goForward()} to=''>
              Go Foward
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink onClick={() => history.go(-1)} to=''>
              Go Back
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
