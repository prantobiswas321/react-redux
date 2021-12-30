import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <h2 className="text-white">RetroShop</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-5 fw-bold navbar-nav">
                        <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/home" activeClassName="selected"
                            activeStyle={{ color: '#00FFFF' }} >Home</NavHashLink>
                        <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/explore" activeClassName="selected"
                            activeStyle={{ color: '#00FFFF' }} >Explore More</NavHashLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;