import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

function Dashboard() {
   
  return (
    <header>
        <Sidebar />
  
      {/* <!-- Navbar --> */}
      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle but
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
  
          {/* <!-- Brand --> */}
          <Link className="navbar-brand" to="#">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
          </Link> 
          {/* <!-- Search form --> */}
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input autoComplete="off" type="search" className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)' style= {{ minWidth: 225+'px' }} />
            <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
          </form>
  
          {/* <!-- Right links --> */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* <!-- Notification dropdown --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" to="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="#">Some news</Link></li>
                <li><Link className="dropdown-item" to="#">Another news</Link></li>
                <li>
                  <Link className="dropdown-item" to="#">Something else</Link>
                </li>
              </ul>
            </li>

            {/* <!-- Avatar --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" to="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                  alt="" loading="lazy" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="#">My profile</Link></li>
                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                <li><Link className="dropdown-item" to="#">Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Dashboard;