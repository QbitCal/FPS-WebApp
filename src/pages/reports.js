import React from 'react'
// import { Dropdown } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';

// TODO: May need to create a custom dropdown if the semantic ui dropdown doesnt work
import { Dropdown } from 'semantic-ui-react'

const Reports = () => {
  return (
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
        <div className='pageContent'>
            <h1>Reports</h1>
            <br />
            <p>
            This is the Fleur De Lis Pet Spa Reports page.
            Once fully setup, this page will display the vailable reports with a dropdown menu allowing the user to change which report they wish to view.
            </p>
            <br />
            <br />
            <div className='dropdown'>
                <ReportDropdown />
            </div>
        </div>
    </div>
  )
}

const ReportDropdown = () => (
    <Dropdown text='DROPDOWN LABEL: Select Appointment Report Type' >
      <Dropdown.Menu>
        <Dropdown.Item text='Description Report - Weekly' />
        <Dropdown.Item text='Geographic Map - Weekly' />
        <Dropdown.Item text='Heat Map - Monthly' />
      </Dropdown.Menu>
    </Dropdown>
  )

export default Reports