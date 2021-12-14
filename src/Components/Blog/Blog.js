import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='p-5 bg-info'>
            <h1 className='m-2 text-white'>Comming Soon .....</h1>
            <Link to='/home'>
                <button className="btn border bg-warning text-black m-5">Go Back</button>
            </Link>
        </div>
    );
};

export default Blog;