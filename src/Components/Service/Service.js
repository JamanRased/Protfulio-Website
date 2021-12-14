import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, description, img } = service;
    return (
        <div className='service '>
             <div className="shadow bg-light px-2 mx-3 pb-3 rounded h-100">
                <img className='img-fix w-25 h-auto rounded-circle mt-4' src={img} alt="" />
                <h3>{name}</h3>
                <h5>{description}</h5>
                <Link to='/services'>
                    <button className="btn border bg-black text-white">Learn More</button>
                </Link>
            </div>
        </div>
       
    );
};

export default Service;