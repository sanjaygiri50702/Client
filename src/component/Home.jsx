import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
var array = require('lodash/array');
var moment = require('moment');
class Home extends React.Component {
    constructor(props){
        super(props);
		this.state = {
			users: [],
			event : []
        };

        
    }

    componentDidMount(){
        if (localStorage.getItem('token') !== null) {
            const token = localStorage.getItem('token').toString();
            axios.get('http://localhost:3000/users',{
                headers: {
                    Authorization: token
                }
            })
            .then((response) =>{
            // handle success
            this.setState({
                    users : response.data
                })
            })
            .catch( (error) => {
            // handle error
            console.log(error);
            })
        }
        axios.get(`http://localhost:3000/event/`)
        .then((response) =>{
        // handle success
        this.setState({
                event : response.data
            })
        })
        .catch( (error) => {
        // handle error
        console.log(error);
    })
    }

    render(){
        let event = array.take(this.state.event,6);
        return (
        <React.Fragment>
            <main>
                <div className="jumbotron">
                    <h1>Express</h1>
                    <p>Welcome to Express</p>
                </div>
                <h2 className="display-3 text-left">Popular Event</h2>
                <div className="row">
                {event.map((event, index) =>
                    <div className="col-4 pb-5" key={index}>
                        <div className="card" style={{width : 18+'rem'}}>
                            <img src="pexels-andrea-piacquadio-774909.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title display-5 text-uppercase text-left">{event.title}</h5>
                            <p className="font-weight-normal text-left">{moment(new Date(event.startDate)).format('ll')}-{moment(new Date(event.endDate)).format('ll')}</p>
                            <p className="text-uppercase text-left">{event.noOfInterest} Interersted</p>
                            <a href="/somewhere"className="btn btn-primary float-left">View Details</a>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </main>
        </React.Fragment>
        );
    }
}

export default Home;