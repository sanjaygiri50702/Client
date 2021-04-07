import React from 'react';
import axios from 'axios';

class CreateEvent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            location: '',
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            host: '',
        }
        	
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
		this.handleHostChange = this.handleHostChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
		this.setState({title: event.target.value});
	}

    handleDescriptionChange(event) {
		this.setState({description: event.target.value});
	}

    handleLocationChange(event) {
		this.setState({location: event.target.value});
	}

    handleStartDateChange(event) {
		this.setState({startDate: event.target.value});
	}

    handleEndDateChange(event) {
		this.setState({endDate: event.target.value});
	}

    handleStartTimeChange(event) {
		this.setState({startTime: event.target.value});
	}

    handleEndTimeChange(event) {
		this.setState({endTime: event.target.value});
	}

    handleHostChange(event) {
		this.setState({host: event.target.value});
    }
    
	handleSubmit(event) {
		event.preventDefault();
		axios.post(' http://localhost:3000/event', {
			title: this.state.title,
			description: this.state.description,
			location: this.state.location,
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			startTime: this.state.startTime,
			endTime: this.state.endTime,
			host: this.state.host,
		  })
		  .then(function (response) {
			console.log(response.data);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}

    render(){

        return (
        <React.Fragment>
            <h1 className="display-3">Create New Event</h1>
            <form className="text-left" onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="inputeventTitle">Event Title</label>
                    <input type="text" className="form-control" id="inputeventTitle" value={this.state.title} onChange={this.handleTitleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="4" value={this.state.description} onChange={this.handleDescriptionChange} ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="inputLocation">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="New Baneshwor, Madan Bhandari Path, Kathmandu 44600" value={this.state.location} onChange={this.handleLocationChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputStartDate">Start Date</label>
                        <input type="Date" className="form-control" id="inputStartDate" value={this.state.startDate} onChange={this.handleStartDateChange} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEndDate">End Date</label>
                        <input type="Date" className="form-control" id="inputEndDate" value={this.state.endDate} onChange={this.handleEndDateChange} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputStartTime">Start Time</label>
                        <input type="time" className="form-control" id="inputStartTime" value={this.state.startTime} onChange={this.handleStartTimeChange} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEndTime">End Time</label>
                        <input type="time" className="form-control" id="inputEndTime" value={this.state.endTime} onChange={this.handleEndTimeChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="inputHostedBy">Hosted By</label>
                        <input type="text" className="form-control" id="inputHostedBy" value={this.state.host} onChange={this.handleHostChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Event</button>
            </form>
        </React.Fragment>
        );
    }
}

export default CreateEvent;
