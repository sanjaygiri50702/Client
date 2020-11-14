import './App.css';
import React from "react";
import Home from './component/Home';
import Footer from './component/Footer';
import Dashboard from './component/Dashboard';
import PrivateRoute from './component/PrivateRoute';
import {BrowserRouter as Router }from 'react-router-dom'
import { AuthContext } from "./component/context/auth";
import Explore from './component/Explore';
import About from './component/About';
import Register from './component/Register';
import CreateEvent from './component/CreateEvent';
import Navbar from './component/Navbar';
import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

const pages = [

  {
    pageLink: '/',
    view: Home,
    displayName: 'Home',
    showInNavbar: true,
  },

  {
    pageLink: '/explore',
    view: Explore,
    displayName: 'Explore',
    showInNavbar: true,
  },
  {
    pageLink: '/about',
    view: About,
    displayName: 'About',
    showInNavbar: true,
  },
  {
    pageLink: '/register',
    view: Register,
    displayName: 'Register',
    showInNavbar: true,
  },
  {
    pageLink: '/createevent',
    view: CreateEvent,
    displayName: 'CreateEvent',
    showInNavbar: true,
  },
  {
    pageLink: '/dashboard',
    view: Dashboard,
    displayName: 'Dashboard',
    showInNavbar: true,
  },
];

function App() {
  return (
  <AuthContext.Provider value={false}>
    <Router>
    <div className="App">
      <div className="container">
        <Navbar />
        <Switch>
				{pages.map((page, index) => {
					return (
					<Route
						exact
						path={page.pageLink}
						render={({match}) => <page.view />}
						key={index}
					/>
					);
				})}
            <Redirect to="/" />
        </Switch>      
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    </div>
    </Router>
  </AuthContext.Provider>
  );
}

export default App;
