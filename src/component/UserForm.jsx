import React from 'react';
import Navbar from './Navbar.jsx';
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
const axios = require('axios');
class UserForm extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            address: '',
            contactNumber: '',
            role: 'user',
            email: '',
            password: '',
            confirmPassword: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit= (e) => {
        e.preventDefault();
        if(!this.props.match.params.userId){
            axios.post('http://localhost:3000/api/users/signup', this.state,{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                }
            })
              .then(function (response) {
				localStorage.setItem('token', response.data.token);
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }else{
            delete this.state.password;
            delete this.state.confirmPassword;
            axios.patch('http://localhost:3000/api/users/'+this.props.match.params.userId, this.state,{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
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
        console.log(this.props);
        if(this.props.match.params.eventId){
            axios.get('http://localhost:3000/api/users/'+ this.props.match.params.userId , {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                }
            })
              .then( (response)=> {
                console.log(response.data);
                this.setState({
                    username: response.data.data.doc.username,
                    address: response.data.data.doc.address,
                    email:response.data.data.doc.email,
                    role:response.data.data.doc.role,
                    contactNumber: response.data.data.doc.contactNumber,
                });
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
  render(){
      console.log(this.props.match.params.userId)
    return (
        <div className="container">
            <Navbar />
            <h1 className="display-3 mb-5">Create Account</h1>
            <form  style={{ textAlign: "left" }} onSubmit={e => { this.handleSubmit(e) }}>
                <div className="form-group mb-3">
                    <label htmlFor="inputusername">User Name</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={this.state.username} onChange = {this.handleInputChange}/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="inputusername">Email</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Email" name="email" value={this.state.email} onChange = {this.handleInputChange}/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control form-control-lg" id="inputAddress" placeholder="1234 Main St" name="address" value={this.state.address} onChange = {this.handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="number" className="form-control form-control-lg" id="contactnumber" placeholder="+97798********" name="contactNumber" value={this.state.contactNumber} onChange = {this.handleInputChange}/>
                </div>

                {(!window.history.state) ? (
                    <React.Fragment>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange = {this.handleInputChange}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange = {this.handleInputChange}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Create Users</button>
                    </React.Fragment>

                ) : <React.Fragment>
                        <span for="contactnumber" className="form-label">Choose Role</span>
                        <select className="form-select mb-3 form-control-lg" aria-label="Default select example" name="role" value={this.state.role} onChange = {this.handleInputChange}>
                            <option selected>Open this select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    <button type="submit" className="btn btn-primary btn-lg">Update Users</button>
                    </React.Fragment>
                }
            </form>
            </div>
      );
  }
}

export default withRouter(UserForm);