import React from 'react'

const Clients = () => {
  return (
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
    <div className='pageContent'>
            <h1>Clients</h1>
            <br />
            <p>
            This is the Fleur De Lis Pet Spa Clients page.
            Eventually, this will have a table with client information, a customer lookup search bar, and the ability to add new customers and pets.
            </p>
            <br />
            <div className='appTableWrapper'>
                <table className='appointments'>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Pet</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Zoey</td>
                    </tr>
                    <tr>
                        <td>Jan</td>
                        <td>Doe</td>
                        <td>Mr. Cat</td>
                    </tr>
                    <tr>
                        <td>Mike</td>
                        <td>Smith</td>
                        <td>Little Guy</td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Meatball</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Clients