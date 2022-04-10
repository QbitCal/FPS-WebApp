import React from 'react'

const Appointments = () => {
  return (
    <div className='div-master' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
    <div className='pageContent'>
            <h1>Appointments</h1>
            <br />
            <p>
            This is the Fleur De Lis Pet Spa Appointments page.
            This will have a table with recent appointmets and the ability to add and change appointments.
            </p>
            <br />
            <br />
            <div>
                <form className='search-form'>
                    <input type="text" className='search' 
                    id="search" name='search' 
                    placeholder='Enter name...' />
                    <input className='search-button' type="submit" value="Search"/>
                </form>
            </div>
            <div className='appTableWrapper'>
                <table className='appointments'>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Appointment</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>11-23-2022 11:00AM</td>
                    </tr>
                    <tr>
                        <td>Jan</td>
                        <td>Doe</td>
                        <td>11-28-2022 12:00PM</td>
                    </tr>
                    <tr>
                        <td>Mike</td>
                        <td>Smith</td>
                        <td>11-30-2022  9:15AM</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>12-1-2022   1:00PM</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Appointments