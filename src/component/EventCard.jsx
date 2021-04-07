import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image.jpg';
import moment from 'moment';

function EventCard(props) {
    const  getWords =(str)=>{
        return str.split(/\s+/).slice(0,20).join(" ");
    }
    // console.log(moment(props.children.startDateAndTime).format("MMMM Do YYYY, h:mm:ss a"));
  return (
    <div className="col-md-6 mb-2">
        <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{height:'350px'}}>
            <div className="card-body d-flex flex-column align-self-stretch align-items-start text-start">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">
                    <Link className="text-dark" to="#">{props.children.title}</Link>
                </h3>
                <div className="mb-1 text-muted">Event Date: {moment(props.children.startDateAndTime).format("MMMM Do YYYY, h:mm a")}</div>
                <p className="card-text mb-3">{getWords(props.children.description)}......</p>
                <div className="col">
                    <Link to="/event/book"><button type="button" className="btn btn-outline-primary">Book Now</button></Link>
                    <Link to={"/events/" + props.children._id} className="ms-3"><button type="button" className="btn btn-outline-secondary">View Detail</button></Link>
                </div>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" aria-hidden src={image} alt="Card image cap" />
        </div>
    </div>
  );
}

export default EventCard;