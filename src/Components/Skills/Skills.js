import React from 'react';
import { ProgressBar} from 'react-bootstrap';
const Skills = () => {
    return (
        <div className='bg-info p-5'>
            <h1>Skills</h1>
            <div className='d-flex p-4 m-4'>
                <div className='w-100'>
                    <img className='w-50 h-auto' src='https://i.ibb.co/Gn07G8n/Skills.png' alt=''/>
                    
                
                </div>
                <div className='w-100 m-2'>
                    <h4 className='p-2'>HTML/CSS/Bootstrap/Material UI<ProgressBar variant="success" now={40} /></h4>
                    <h4 className='p-2'>Javascript/Git/Github<ProgressBar variant="danger" now={20} /></h4>
                    <h4 className='p-2'>Mongo DB/Express Js/React/Node JS<ProgressBar variant="warning" now={60} /></h4>
                    <h4 className='p-2'>Heroku/Firebase<ProgressBar variant="danger" now={80} /></h4>
                </div>
            </div>
        </div> 
    );
};

export default Skills;