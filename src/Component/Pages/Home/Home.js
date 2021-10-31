import React, { useEffect, useState } from 'react';
import './Home.css'
import res1 from '../../../Image/0011.jpg'
import res2 from '../../../Image/022.jpg'
import res3 from '../../../Image/066.jpg'
import res4 from '../../../Image/077.jpg'
import res5 from '../../../Image/088.jpg'
import res6 from '../../../Image/downtown.jpg'
import video from '../../../video/Motorbike delivery food in Kuwait.mkv'
import banner from '../../../Image/banner2.png'
import Service from '../Service/Service';
const Home = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://frightening-ghost-27691.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div>
            <div className=" home-banner">
                <div className="row">
                    <div className="col header-left">
                    <h1>Get your orders delivered 24/7</h1>
                    <p>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                    <h3>Top Restaurant offering delivery</h3>
                    <small className="restaurant">
                    <img src={res1} alt="" />
                    <img src={res2} alt="" />  
                    <img src={res3} alt="" />  
                    <img src={res4} alt="" />  
                    <img src={res5} alt="" />
                    <img src={res6} alt="" />
                    </small>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>
            <div className="service-section">
              <h2>Most rated food we are currently delivering are:</h2>
                <div className="service-container">

                {
                    offers.map(offers => <Service key={offers._id} offers={offers}/>)
                }
                </div>
            </div>
            <div className="row order-banner">
                <div className="col order-banner-left">
                
                <h1>Place your order NOW and get your delivery super fast!!!</h1>
                    <p>Scroll and order now!!! – the restaurants and shops you love. Eat the foods you love , and share it with your loved ones. Hurray UP!!! We are waiting!!!.</p>
                <button className="btn btn-warning orderbtn" >Order now</button>
                
                <button className="btn btn-dark">Search</button>
                </div>
                <div className="col banner">
                   <img src={banner} alt="" />
                </div>
            </div>
            <div>
                <video src={video}></video>
            </div>
        </div>
    );
};

export default Home;