import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="website-logo navbar-brand" herf="#"> {props.title} </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-link nav-link active" aria-current="page" herf="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="navbar-link nav-link" herf="/about">About</a>
                        </li> */}
                    </ul>
                    <button className="btn btn-danger" onClick={props.toggleMode}></button>
                    <button className="btn btn-primary mx-3" onClick={props.toggleMode}></button>
                    <button className="btn btn-success" onClick={props.toggleMode}></button>

                    <div className={`mx-5 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable Dark Mode
                        </label>
                    </div>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            style={
                                {
                                    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
                                    color: props.mode === 'light' ? '#212529' : 'white'
                                }
                            } 
                        />
                        <button className={`myBtn btn btn-${props.mode}`} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    about: "Set About here"
}