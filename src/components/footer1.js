import React from 'react';
import dd from '../dd.svg'


const Footer1 = () => {
    return (
        <div className='footer d-flex align-items-center justify-content-between p-5' style={{backgroundColor:"#186250",height:"160px"}}>
<p style={{color:"white",fontSize:"18px"}}>Ehab Emad  Saleh</p>
<p style={{color:"orangered",fontSize:"20px"}}><img src={dd} alt='logopage'/></p>

        </div>
    );
};

export default Footer1;