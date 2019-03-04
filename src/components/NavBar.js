import React from 'react';
import './styles/navbar_styling.css';
import './styles/content_styling.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-danger white-color-text navbar-margin-below">
                <a className="navbar-brand">
                    <i className="fas fa-shopping-cart fa-fw white-color-text"></i>
                    Flash Deals
                </a>
                <div className="form-inline">
                    <a>
                        <button className="btn btn-outline-dark my-2 my-sm-0 button-padding bg-light margin-between-buttons" type="submit">Login</button>
                    </a>
                    <a>
                        <button className="btn btn-outline-dark my-2 my-sm-0 bg-light margin-between-buttons" type="submit" >Sign up</button>
                    </a>
                </div>
            </nav>
        )
    }
}

export default NavBar;