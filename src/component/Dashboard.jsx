import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    let event = [];
    axios.get(`http://localhost:3000/event`)
    .then((response) =>{
    // handle success
        event = response.data;
    })
    .catch( (error) => {
    // handle error
    console.log(error);
})
  return (
    <div className="row">
        <div className="col-3">
            <ul className="list-group">
                <Link to="/createevent"><li className="list-group-item">Create Event</li></Link>
                <Link to="/allevent"><li className="list-group-item">All User</li></Link>
            </ul>
        </div>
        <div className="col-9">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">No of Interested</th>
                <th scope="col">Total Booking</th>
                <th scope="col">Hosted By </th>
                </tr>
            </thead>
            <tbody>
            {event.map((event, index) =>
                <tr>
                   <th scope="row">1</th>
                    <td>{event.title}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default Dashboard;