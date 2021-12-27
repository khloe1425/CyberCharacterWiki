import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="ubuntu navbar-brand">Rick & Morty <span className="text-primary">WiKi</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <style jsx="true">
                        {`
                            button[aria-expanded="true"] > .open{
                                display:none;
                            }
                            button[aria-expanded="false"] > .close{
                                display:none;
                            }
                        `}
                    </style>
                    <i className="fa fa-bars open" />
                    <i className="fa fa-times close" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/">Characters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/episodes">Episodes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/location">Location</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
