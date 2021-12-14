import React from 'react';
import { Link } from 'react-router-dom';

const Work = ({work}) =>{
    const { title, tag, image,website } = work;
    return (
        <div className='service '>
             <div className="shadow bg-light px-2 mx-3 pb-3 rounded h-100">
                <img className='img-fix w-50 h-auto mt-4' src={image} alt="" />
                <h2>{title}</h2>
                <h6>{tag}</h6>
                <a href={website}><button className="btn border bg-black text-white">Live Preview</button></a> 
               
            </div>
        </div>
    );
};

export default Work;