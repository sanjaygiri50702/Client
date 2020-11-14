import React from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password : ''
		};
	
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	
	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post(' http://localhost:3000/users/login', {
			email: this.state.email,
			password: this.state.password
		  })
		  .then(function (response) {
			localStorage.setItem('token', response.data.token);
			alert('login sucessful');
			(response.data.isAdmin) ? <Redirect to="/dashboard" /> : <Redirect to="/about" /> 
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
render(){

	return (
	<form className="form-inline" action="/users/login" method="POST" onSubmit={this.handleSubmit}>
		<div className="form-group mb-2">
			<label htmlFor="inputEmail" className="sr-only">Email</label>
			<input type="email" className="form-control" id="inputEmail"  value={this.state.email} placeholder="Email" onChange={this.handleEmailChange}/>
		</div>

		<div className="form-group mx-sm-3 mb-2">
			<label htmlFor="inputPassword" className="sr-only">Password</label>
			<input type="password" className="form-control" id="inputPassword" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange}/>
		</div>

		<button type="submit" className="btn btn-primary mb-2">Login</button>
		<Link to="/register" className="btn btn-outline-primary mb-2 ml-2">Register</Link>
	</form>
	);
}
}

export default Login;