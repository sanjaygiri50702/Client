import React from 'react';
import { NavLink } from "react-router-dom";

function Sidebar() {

  return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <NavLink to="/create-event" className="list-group-item list-group-item-action py-2 ripple" aria-current="true" activeClassName="active">
                        <span>Create Event</span>
                    </NavLink>
                    <NavLink to="/dashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true" activeClassName="active">
                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                    </NavLink>
                    <NavLink to="/events" className="list-group-item list-group-item-action py-2 ripple" >
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>All Events </span>
                    </NavLink>
                    <NavLink to="/booking" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>Booking</span>
                    </NavLink>
                    <NavLink to="/internationl" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-globe fa-fw me-3"></i><span>International</span>
                    </NavLink>
                    <NavLink to="/partners" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-building fa-fw me-3"></i><span>Partners</span>
                    </NavLink>
                    <NavLink to="/calender" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span>
                    </NavLink>
                    <NavLink to="/users" className="list-group-item list-group-item-action py-2 ripple" activeClassName="active">
                        <i className="fas fa-users fa-fw me-3"></i><span>Users</span>
                    </NavLink>
                    
                </div>
            </div>
        </nav>

  );
}

export default Sidebar;