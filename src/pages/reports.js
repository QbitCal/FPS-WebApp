import React from 'react'

// TODO: May need to create a custom dropdown if the semantic ui dropdown doesnt work
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/default.css'


const Reports = () => {
  return (
    <div className='div-master' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        }}
    >
      <body className='body-master'>
        <div className='pageContent'>
            <h1>Reports</h1>
            <br />
            <p>
            This is the Fleur De Lis Pet Spa Reports page.
            Once fully setup, this page will display the vailable reports with a dropdown menu allowing the user to change which report they wish to view.
            </p>
            <br />
            <br />
            <div>
                <DropdownButton className="dropdown-basic-button" id="dropdown-basic-button" title="Select Appointment Report Type">
                  <Dropdown.Item href="#">Description Report - Weekly</Dropdown.Item>
                  <Dropdown.Item href="#">Geographic Map - Weekly</Dropdown.Item>
                  <Dropdown.Item href="#">Heat Map - Monthly</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='report-body'>
                <div className='placeholder'></div >
            </div>
        </div>
      </body>
    </div>
  )
}

export default Reports