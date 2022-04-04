import React from 'react'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Dropdown } from 'bootstrap';
import { DropdownButton } from 'react-bootstrap';

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
            <p>
            This is the Fleur De Lis Pet Spa Reports page.
            Once fully setup, this page will display the vailable reports with a dropdown menu allowing the user to change which report they wish to view.
            </p>
            {/* <DropdownButton id="reports-dropdown" title="Select Report">
                <Dropdown.Item href="#/action-1">Appointments: Weekly</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Geographic-Visualiztion of Appointments: Weekly</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Heat-Map-Visualization of Appointments: Monthly</Dropdown.Item>
            </DropdownButton> */}
        </div>
    </div>
  )
}

export default Reports