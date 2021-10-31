import React from 'react';
import { Link } from 'react-router-dom';
import useFirsebase from '../../../Hook/usefirebase';
import logo from '../../../Image/fav1.png'
import './Header.css'
const Header = () => {
    const {user,logout}=useFirsebase();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid header">
               <img src={logo} alt="" />
               <strong className="title"> FoodMami </strong>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav position-absolute end-0">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    <Link className="nav-link active" aria-current="page" to="/Services">Offer</Link>
                    <Link className="nav-link active" to="/order">My Orders</Link>
                    <Link className="nav-link active" to="Orderplace">Orderplace</Link> 
                    <span >Signed in as : {user.displayName} </span>
                    {user.email ?
                        <button onClick={logout}>logout</button>
                    :
                    <Link className="nav-link active" to="/login">Login</Link>

                    }
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;