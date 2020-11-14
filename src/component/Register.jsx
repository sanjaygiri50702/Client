import React from 'react';
import axios from 'axios';

class Register extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            username : '',
			email: '',
            password : '',
            repassword : '',
            passwordMatch : true,
		};
	
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleUserNameChange(event) {
		this.setState({username: event.target.value});
	}
	
	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	
	handlePasswordChange(event) {
        this.setState((prevState, props) => ({ 
            password: event.target.value ,
            passwordMatch : (prevState.repassword === event.target.value ) ? true : false,
        }));
	}
	
	handleRePasswordChange(event) {
        this.setState((prevState, props) => ({ 
            repassword: event.target.value ,
            passwordMatch : (prevState.password === event.target.value ) ? true : false,
        }));

    }

	handleSubmit(event) {
		event.preventDefault();
		axios.post('http://localhost:3000/users/register', {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		  })
		  .then(function (response) {
			localStorage.setItem('token', response.data.token)
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
    render(){
        
        return (
            <React.Fragment>
                <h1 className="display-3">Register New User</h1>

                <form className="mx-auto" style={{width: 50+'%'}} onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Name</label>
                            <input type="Name" className="form-control" id="inputName" value={this.state.username} onChange={this.handleUserNameChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                    </div>
            
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputRePassword">Confirm Password</label>
                            <input type="password" className={"form-control " + (this.state.passwordMatch ? "" : "is-invalid") } id="inputRePassword" value={this.state.repassword} onChange={this.handleRePasswordChange} />
                            {!this.state.passwordMatch &&
                                <div id="inputRePassword" className="invalid-feedback">Password Not Match
                                </div>
                            }
                        </div>
                    </div>
            
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </React.Fragment>
    
        );
    }
}

export default Register;