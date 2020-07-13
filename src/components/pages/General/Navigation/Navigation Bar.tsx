import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
const history = require("history").createBrowserHistory();

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isOpen: false,
      data: []
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
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
  }
  datas = [
    {
      key: "Himadu",
      value: "Himadu Sirimanna"
    },
    {
      key: "Santhusha",
      value: "Santhusha the Idiota"
    },
    {
      key: "Dog",
      value: "Dogs"
    },
    {
      key: "Cat",
      value: "Cats"
    },
    {
      key: "Mutt",
      value: "Duck"
    }
  ];
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
      return (
        <MDBNavbar color='#1c2a48 mdb-color darken-3' dark expand='md'>
          {/* Default color was : default-color */}
          <MDBNavbarBrand>
            <strong className='white-text'>Hello</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
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
              {/** Whole section brocken down
             
             Emergency additions have been fixed
             
             <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className='d-none d-md-inline'>Other</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default'>
                    <MDBDropdownItem href='http://www.himadusirimannax.dx.am'>
                      Second Page
                    </MDBDropdownItem>
                    <MDBDropdownItem href='http://himadusirimanna.getenjoyment.net'>
                      My Media (Not Working).
                    </MDBDropdownItem>
                    <MDBDropdownItem href='http://www.himadusirimannagame.atwebpages.com'>
                      My Games (Not Working).
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem> 
              */}
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/*
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon='user' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default'>
                  
                      //Changed MDBReact change please read navbar api documentation before proceeding
`                     //Removed user please add those features to firebase system domain`

                    <MDBDropdownItem href='https://himadusirimanna.herokuapp.com/'>
                      User (Inactive)
                    </MDBDropdownItem>
                    <MDBDropdownItem href='https://fir-32d38.web.app/'>
                      Chat
                    </MDBDropdownItem>
                 
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>{" "} 
              */}
              <ReactSearchBox
                placeholder='Search'
                value='Empty'
                data={this.datas}
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
    }
  }
}
export default NavbarPage;
