import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div>
           <div className='row banner-main d-flex'>
                <div className='col-md-6 bg-imgg'>
                    <img  src="https://i.ibb.co/vx60MGQ/pro.png" alt="..." className="img-thumbnail"></img>
                    <br/>
                    <a href="https://drive.google.com/file/d/16nRPhhXBgxdtHJ90lKGerNFOXDV-TMCa/view?usp=sharing"><button className='text-black border px-4 ms-3 mt-3 m-3 p-2' >Download Resume</button></a>
                </div>
                <div className='col-md-6 bg-tag'>
                    <h1>Md. RASEDUZZAMAN</h1>
                    <span className='fs-4' >Jr. Full Stack Web Developer</span>
                    <br/>
                    <div className=''>
                        <a href="https://github.com/JamanRased" target="_blank">
                            <img src="https://i.ibb.co/XC3g9Gw/25657.png" alt="..." className="social-icon  img-thumbnail"/>
                        </a> 
                        <a href="https://bd.linkedin.com/in/md-raseduzzaman-1470b0154" target="_blank">
                            <img src="https://i.ibb.co/xC8r2K5/3536505.png" alt="..." className="social-icon  img-thumbnail"></img>
                        </a> 
                        <a href="mailto: jaman.rashed.199@gmail.com" target="_blank">
                            <img src="https://i.ibb.co/JRn76Ph/2374449.png" alt="..." className="social-icon  img-thumbnail"></img>
                        </a> 
                        <a href="skype: jaman.rashed.199" target="_blank">
                            <img src="https://i.ibb.co/FDg41TK/179338.png" alt="..." className="social-icon  img-thumbnail"></img>
                        </a> 
                    </div>
                    
                </div>
               
           </div>
        </div>
    );
};

export default Banner;