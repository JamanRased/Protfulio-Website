import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Works.css';

const Works = () => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch('protfulio.JSON')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])

    return (
        <div id="works">
            <h1 className="text-center ms-4 pt-3">Works</h1>
            <p>Select Your Comfortness</p>
            <div className="service-container bg-warning hover-overlay hover-zoom hover-shadow ripple">
                {
                    works.map(works => <Work
                        key={works.id}
                        work={works}
                    ></Work>)
                }  
            </div>
        </div>
    );
};

export default Works;