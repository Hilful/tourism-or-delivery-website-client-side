import React from 'react';
import notfound from '../../../Image/notfound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="found">
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;