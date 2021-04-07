import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { GlobalContext } from '../../context/GlobalState.jsx';


function Events(props) {
    const events  = (!props.events) ? [] : props.events;
    const eventId = useParams();
    console.log(eventId)
  return (
    <main style={{marginTop: "58px"}}>
        {events.length > 0 ? (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Event Date</th>
                    <th scope="col">Host</th>
                    <th scope="col">Price</th>
                    <th scope="col">Seat</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
            {events.map((event,index) => (
                <tr className='clickable-row' data-href='url://' key={event._id}>
                    <th scope="row">{index}</th>
                    <td className="col-md-3">{event.title}</td>
                    <td className="col-md-2">{event.location}</td>
                    <td>{event.startDate}</td>
                    <td>{event.host}</td>
                    <td>{event.price}</td>
                    <td>{event.totalSeat}</td>
                    <td>
                        <button type="button" className="btn btn-outline-danger btn-sm" data-mdb-ripple-color="dark" onClick={()=>props.deleteEvent}>Delete</button>
                        <Link to={{
                            pathname:"/create-event/edit/"+event._id,
                            state: { eventid: event._id }

                            }} ><button type="button" className="btn btn-outline-primary btn-sm" style={{marginLeft : '10px'}} data-mdb-ripple-color="dark">Edit</button> </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        ) : (
            <div className="alert alert-primary" role="alert">
                No data Available
            </div>
        )}
    </main>
  );
}

export default Events;