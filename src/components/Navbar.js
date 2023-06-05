import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
            <nav className="navbar navbar-expand-xxl navbar-dark bg-dark nav_bar_self">
        <a className="navbar-brand heading1" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex search_bar">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary button1" type="submit">Search</button>
            </form>

        <div className="collapse navbar-collapse icons" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link tab1" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab2" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab3" href="/">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab4" href="/">Join</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab5" href="/">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab6" href="/">Wishlist</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab7" href="/">Cart</a>
                </li>
            </ul>
                
        </div>
        <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div>
    </nav>     
</div>
  );
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    
}

Navbar.defaultProps = {
    title : "set title"

}