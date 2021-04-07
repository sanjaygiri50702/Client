import './App.css';
import React, { useEffect, useState } from "react";
import Home from './component/Home';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Users from './component/Dashboard/Users/Users.jsx';
import EventForm from './component/EventForm.jsx';
import UserForm from './component/UserForm.jsx';
import axios from 'axios';
import Events from './component/Dashboard/Events/Events.jsx';
import Event from './component/Event.jsx';
// import PrivateRoute from './component/PrivateRoute';
import { BrowserRouter as Router } from 'react-router-dom'
// import { AuthContext } from "./component/context/auth";
import Explore from './component/Explore';
import About from './component/About';
import Register from './component/Register';

// import { GlobalProvider } from './component/context/GlobalState.jsx';

// import Navbar from './component/Navbar';
import {
	Switch,
	Route,
} from "react-router-dom";


// class DebugRouter extends Router {
// 	constructor(props) {
// 		super(props);
// 		console.log('initial history is: ', JSON.stringify(this.history, null, 2))
// 		this.history.listen((location, action) => {
// 			console.log(
// 				`The current URL is ${location.pathname}${location.search}${location.hash}`
// 			)
// 			console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null, 2));
// 		});
// 	}
// }
function App() {

	const [events, setEvents] = useState();
	const [users, setUsers] = useState();


	useEffect(() => {
		axios.get('http://localhost:3000/api/event')
		.then(function (response) {
			// handle success
			setEvents(response.data.data.data)
		})
		.catch(function (error) {
		// handle error
		console.log(error);
		})
		.then(function () {
		// always executed
		});

		axios.get('http://localhost:3000/api/users/',{
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmFlZTE1MDRmMjcyMDY3NDBiYzlmMCIsImlhdCI6MTYxNzYyMDUwMSwiZXhwIjoxNjIwMjEyNTAxfQ.3T4iRxYJheOd_kSOTgTniVTSVwMINTJ_0Fxj_mHA2BE' 
			}
		})
		.then(function (response) {
			// handle success
			setUsers(response.data.data.data)
		})
		.catch(function (error) {
		// handle error
			console.log(error);
		});

	  }, []);


	const handleUserDelete = (item) =>{
		axios.delete('http://localhost:3000/api/users/'+item._id,{
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmFlZTE1MDRmMjcyMDY3NDBiYzlmMCIsImlhdCI6MTYxNzYyMDUwMSwiZXhwIjoxNjIwMjEyNTAxfQ.3T4iRxYJheOd_kSOTgTniVTSVwMINTJ_0Fxj_mHA2BE' 
			}
		})
		.then(function (response) {
			// handle success
			console.log(response);
			setUsers(users.filter(i => i._id !== item._id));
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	}

	return (
		<Router>
			{/* <Dashboard/> */}
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home events={events} />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					
					<Route path="/create-event">
						<EventForm  />
					</Route>
					<Route path="/create-event/:eventId">
						<EventForm  />
					</Route>
					<Route exact path="/users">
							<Users users={users} deleteUser={(item)=>handleUserDelete(item)} />
					</Route>
					<Route exact path="/users/create">
						<UserForm />
					</Route>
					<Route path="/users/edit/:userId">
						<UserForm />
					</Route>
					<Route exact path="/events/:eventId">
						<Event />
					</Route>
				</Switch>
				{/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}

				<Footer />
			</div>
		</Router>
	);
}

export default App;
