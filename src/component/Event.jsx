import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import EventCard from './EventCard.jsx';

function Event() {
    let { eventId } = useParams();
    const [event, setEvent] = useState();
    const [similarDocuments, setSimilarDocuments] = useState();

    React.useEffect(() => {
        axios.get('http://localhost:3000/api/event/' + eventId)
            .then(function (response) {
                setEvent(response.data.data.doc)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:3000/api/event/recommend/' + eventId)
            .then(function (response) {
                console.log(response.data.data)
                setSimilarDocuments(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [eventId]);

    const similar =(id) =>{
        let spd = similarDocuments.similarPopulateDocument;
        return spd.find(a => a._id === id)
    }
    return (

        <div className="container">
            <Navbar />
            {event ? (
                <React.Fragment>
                    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark mb-5 text-start">
                        <div className="col" style={{ width: "75%" }}>
                            <h1 className="display-4 font-italic mb-4">{event.title}</h1>
                            <p className="fs-5 fw-normal mb-4">Date & Time: {moment(event.startDateAndTime).format("MMMM Do YYYY, h:mm a")}</p>
                            <p className="fs-5 fw-normal mb-4">Location: {event.address}</p>
                            <p className="fs-5 fw-normal mb-4">Host By: {event.host}</p>
                            <p className="lead mb-4">
                                <button type="button" className="btn btn-outline-secondary btn-lg">Book Tickets</button>
                                <button type="button" class="btn btn-outline-success btn-lg ms-3">Price {event.price}</button>
                            </p>
                        </div>
                    </div>
                    <h1 className="display-6 font-italic">About The Event</h1>
                    <p className="lead my-3 me-10">{event.description}</p>
                </React.Fragment>
            
            ) : (
                    <p>no data</p>

                )}
                
                <h1 className="display-3 text-start pt-5">Similar Event</h1>
                <div className="row mb-2">
                    {(similarDocuments ) ? (
                        <React.Fragment>
                            {similarDocuments.similarDocuments.map((sd,index)=>{
                                return <EventCard key={index}>{similar(sd.id)}</EventCard>
                            })}
                        </React.Fragment>
                    ) : (
                        <p>ssss</p>
                    ) }
                </div>
        </div>
    );
}

export default Event;