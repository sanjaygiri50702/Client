import React from 'react';
const axios = require('axios');

class EventForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            address: '',
            city: '',
            startDateAndTime: Date.now(),
            endDateAndTime: Date.now(),
            host: '',
            price: 0,
            totalSeat: 0,
        };
        console.log(this.state); 
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log({name,value})
        this.setState({
            [name]: value
        });
    }

    handleSubmit= (e) => {
        console.log(this.state);
        e.preventDefault();
        if(!window.history.state.state.eventid){
            axios.post('http://localhost:3000/api/event/', this.state,{
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjViOTk5NWE0MTVkMWMyMGM5MDFjMiIsImlhdCI6MTYxNzI3OTUxMSwiZXhwIjoxNjE5ODcxNTExfQ.vhi8dhRp5lon4OOqyhonWrjsDfOvop9jkHGKxeun7_s' 
                }
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }else{
            axios.patch('http://localhost:3000/api/event/', this.state,{
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjViOTk5NWE0MTVkMWMyMGM5MDFjMiIsImlhdCI6MTYxNzI3OTUxMSwiZXhwIjoxNjE5ODcxNTExfQ.vhi8dhRp5lon4OOqyhonWrjsDfOvop9jkHGKxeun7_s' 
                }
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
    componentDidMount=()=>{
        if(window.history.state.state.eventid){
            axios.get('http://localhost:3000/api/event/'+ window.history.state.state.eventid , this.state,{
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjViOTk5NWE0MTVkMWMyMGM5MDFjMiIsImlhdCI6MTYxNzI3OTUxMSwiZXhwIjoxNjE5ODcxNTExfQ.vhi8dhRp5lon4OOqyhonWrjsDfOvop9jkHGKxeun7_s' 
                }
            })
              .then( (response)=> {
                console.log(this.state.title);
                this.setState({
                    title: response.data.data.doc.title,
                    description: response.data.data.doc.description,
                    // address: response.data.data.doc.address,
                    // city: response.data.data.doc.city,
                    startDateAndTime:response.data.data.doc.startDateAndTime,
                    endDateAndTime:response.data.data.doc.endDateAndTime,
                    host: response.data.data.doc.host,
                    price:response.data.data.doc.price,
                    totalSeat: response.data.data.doc.totalSeat
                });
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
  render(){
      console.log(this.state);
    return (
        <main style={{marginTop: "58px"}}>
            <div className="container pt-4">
                {this.props.event}
                <form  style={{ textAlign: "left" }} onSubmit={e => { this.handleSubmit(e) }}>
                    <div className="form-group mb-3">
                        <label htmlFor="inputeventtitle">Event Title</label>
                        <input type="text" className="form-control" placeholder="Event Title" name="title" value={this.state.title} onChange = {this.handleInputChange}/>
                    </div>
    
                    <div className="form-group mb-3">
                        <label htmlFor="exampleFormControlTextarea1">Event Description</label>
                        <textarea className="form-control" placeholder="Description" rows="4" name="description" value={this.state.description} onChange = {this.handleInputChange}></textarea>
                    </div>
    
                    <div className="row mb-3 col">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={this.state.address} onChange = {this.handleInputChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange = {this.handleInputChange}/>
                        </div>
                    </div>
                    
                    <div className="row g-3 mb-3">
                        <div className="col">
                            <label htmlFor="eventStartDate">Event Start Date</label>
                            <input type="datetime-local" className="form-control" placeholder="Start Date" aria-label="Event Start Date" name="startDateAndTime" value={this.state.startDateAndTime} onChange = {this.handleInputChange}/>
                        </div>
    
                        <div className="col">
                            <label htmlFor="eventEnddate">Event End Date</label>
                            <input type="datetime-local" className="form-control" placeholder="End Date" aria-label="Event End date" name="endDateAndTime" value={this.state.endDateAndTime} onChange = {this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hostname" className="form-label">Host Name</label>
                        <input type="text" className="form-control" id="hostname" name="host" value={this.state.host} onChange = {this.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="seat" className="form-label">Seat Capacity</label>
                        <input type="text" className="form-control" id="seat" placeholder="name@example.com" name="totalSeat" value={this.state.totalSeat} onChange = {this.handleInputChange}/>
                    </div>
    
                    <div>
                        <label htmlFor="seat" className="form-label">Booking Fees</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" name="price" value={this.state.price} onChange = {this.handleInputChange} />
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Event</button>
                </form>
            </div>
        </main>
      );
  }
}

export default EventForm;