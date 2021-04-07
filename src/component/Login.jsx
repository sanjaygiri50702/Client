import React from 'react';
import axios from 'axios';
import { Link, Redirect, useHistory} from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Error from './Error.jsx'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isError: false,
			errMsg: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
	handleSubmit =(event) =>{
		event.preventDefault();

		console.log(this.props)
		axios.post(' http://localhost:3000/api/users/login', {
			email: this.state.email,
			password: this.state.password
		})
			.then( (response)=> {
				localStorage.setItem('token', response.data.token);
				window.location.reload();

			})
			.catch( (error) => {
				console.log(error.response.data.message);
				this.setState({
					isError: true,
					errMsg: error.response.data.message
				})
			});
	}

	render() {
		if (localStorage.getItem('token')) {
			return <Redirect to='/' />
		  }
		return (
			
			<div className="container">
				<Navbar />
				<h1 className="display-3 mb-5">Login Form</h1>
				{this.state.isError && <div class="alert alert-danger" role="alert">{this.state.errMsg}</div> }
				<form onSubmit={e => { this.handleSubmit(e) }}>
					<div className="row mb-3" >
						<label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
						<div className="col-sm-10">
							<input type="email" className="form-control form-control-lg" id="inputEmail3" name="email" value={this.state.email} onChange = {this.handleInputChange}/>
						</div>
					</div>
						<div className="row mb-3">
							<label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
							<div className="col-sm-10">
								<input type="password" className="form-control form-control-lg" id="inputPassword3" name="password" value={this.state.password} onChange = {this.handleInputChange}/>
							</div>
						</div>
						<div class="d-grid gap-2 col-6 mx-auto">
							<button type="submit" className="btn btn-primary btn-lg">Login Users</button>
						</div>
					</form>
			</div>
		);
	}
}

export default Login;