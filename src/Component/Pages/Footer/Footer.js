import React from 'react';
import './Footer.css'
import logo from '../../../Image/fav1.png'
const Footer = () => {
    return (
        <div>
            <div className="footer-body">
            <div className="row">
                <div className="col">
                <img src={logo} alt="" />
                <p>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                <h6>Phone: <small> +8801752649975</small></h6>
                <h6>Email: <small> mami@mail.co</small></h6>
                </div>
                <div className="col">
                <h3>Our Services</h3>
                <p>Offers</p>
                <p>Orders</p>
                <p>Delivery Time</p>
                </div>
                <div className="col">
                <h2>Latest Delivery of most wanted Items</h2>
                <p>Peperoni Pizza with beef,cheese and lots of mushroom from MasterChef
                    October 31, 2021
                </p>
                <p>Grilled Sandwich & Shawarma With Coleslaw
                    November 3, 2021
                    </p>
                </div>
                <div className="col">
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;