import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h1 className="text-center ms-4 pt-3">Services</h1>
            <p>Select Your Service For Your Comfortness</p>
            <div className="service-container bg-primary">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }  
            </div>
        </div>
    );
};

export default Services;

