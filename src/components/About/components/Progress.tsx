import React from "react";
import { MDBProgress } from "mdbreact";

const ProgressBarPage = () => {
  return (
    <>
      {" "}
      <h3 className='text-center blue-text'>
        <strong>My Skill </strong>
        <small className='text-muted'>List</small>
      </h3>
      <ol>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            Java Script
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            HTML
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            CSS
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            Node.js
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            React.js
          </MDBProgress>{" "}
        </li>
        <li>
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            SQL
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            Java
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            PHP
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={100}
            striped
            animated
            height='20px'
            color='success'>
            Express.js
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={60}
            striped
            animated
            height='20px'
            color='info'>
            Python
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={60}
            striped
            animated
            height='20px'
            color='info'>
            Jquery
          </MDBProgress>
        </li>
        <li>
          {" "}
          <MDBProgress
            material
            value={50}
            striped
            animated
            height='20px'
            color='info'>
            Pascal
          </MDBProgress>
        </li>

        <li>
          {" "}
          <MDBProgress
            material
            value={50}
            striped
            animated
            height='20px'
            color='info'>
            C
          </MDBProgress>
        </li>
        <li>
          <MDBProgress
            material
            value={50}
            striped
            animated
            height='20px'
            color='info'>
            C#
          </MDBProgress>
        </li>
        <li>
          <MDBProgress
            material
            value={50}
            striped
            animated
            height='20px'
            color='info'>
            C++
          </MDBProgress>
        </li>
      </ol>
    </>
  );
};

export default ProgressBarPage;
