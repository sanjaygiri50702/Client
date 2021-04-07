import React from 'react';
import { Link, Redirect } from "react-router-dom";


function Navbar() {
    const logOut =() =>{
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <React.Fragment>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link className="text-muted" to="#">Subscribe</Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link className="blog-header-logo text-dark" to="/">Event Booking</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        {(!localStorage.getItem('token')) ? (
                            <React.Fragment>
                                <Link className="btn btn-sm btn-outline-secondary" to="/login">Login</Link>
                                <Link className="btn btn-sm btn-outline-secondary ms-3" to="/users/create">Sign up</Link>
                            </React.Fragment>
                            ):(

                                <button className="btn btn-sm btn-outline-secondary ms-3" onClick={()=>logOut()}>Log Out</button>
                            )
                        }
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to="/world">World</Link>
                    <Link className="p-2 text-muted" to="#">Technology</Link>
                    <Link className="p-2 text-muted" to="#">Design</Link>
                    <Link className="p-2 text-muted" to="#">Culture</Link>
                    <Link className="p-2 text-muted" to="#">Business</Link>
                    <Link className="p-2 text-muted" to="#">Politics</Link>
                    <Link className="p-2 text-muted" to="#">Opinion</Link>
                    <Link className="p-2 text-muted" to="#">Science</Link>
                    <Link className="p-2 text-muted" to="#">Health</Link>
                    <Link className="p-2 text-muted" to="#">Style</Link>
                    <Link className="p-2 text-muted" to="#">Travel</Link>
                </nav>
            </div>

        </React.Fragment>

    );
}

export default Navbar;