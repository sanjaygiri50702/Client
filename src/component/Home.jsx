import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard.jsx';
import Navbar from './Navbar.jsx';
import _ from 'lodash/array';

// import axios from 'axios';
// import Navbar from './Navbar';

function Home(props) {
    const events  = (!props.events) ? [] : _.take(props.events,4);
    ;
    return (
        <React.Fragment>
            <div className="container">
                <Navbar />
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark mb-5">
                    <div className="col-md-6 px-0 text-start">
                        <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                        <p className="lead mb-0">
                            <Link to="#" className="text-white font-weight-bold"><button type="button" className="btn btn-primary">Book Now</button></Link>
                            <Link to="#" className="text-white font-weight-bold ms-3"><button type="button" className="btn btn-outline-secondary">View Detail..</button></Link>
                            </p>
                    </div>
                </div>

                <h1 className="display-3 text-start">Featured Event</h1>
                <div className="row mb-2">
                    {events.length > 0 ? (
                        events.map((event,index)=>{
                            return <EventCard key={index}>{event}</EventCard>
                        })
                    ) : (
                        <p>no data</p>
                    )}
                        
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;