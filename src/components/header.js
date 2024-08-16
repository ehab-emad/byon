import React, { useState } from 'react';
import dd from '../dd.svg'
import { faPhone,faSearch ,faBars,faX,faFileCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Header = () => {
  const[index,setindex]=useState(null)
  const[change,setchange]=useState(null)
  
  return (
    <div className='header'>
     
      <div className='right'>
     <div className='edit'>
    <Link to={'/'} onClick={()=>{setindex(0)}}> <img src={dd} alt='logopage'/></Link>
      <ul className={` ${change===1 ? 'active2':''}`}>
      <FontAwesomeIcon icon={faX} className='x'  onClick={()=>{setchange(0)}}/>
        <li onClick={()=>{setindex(0)
        setchange(0)

        }}> <Link className={`i ${index===0 ? 'active1':''}`}to={'/'} >الرئيسية</Link></li>
        <li onClick={()=>{setindex(1)
          setchange(0)
        }}><Link  className={`i ${index===1 ? 'active1':''}`} to={'/Home/service'}>الخدمات</Link></li>
        <li   onClick={()=>{setindex(2)
          setchange(0)
        }}><Link className={`i ${index===2 ? 'active1':''}`}to={'/Home/applying'}>التوظيف و التدريب</Link></li>
        <li  onClick={()=>{setindex(3)
          setchange(0)
        }}><Link className={`i ${index===3 ? 'active1':''}`} to={'/Home/contact'}>تواصل معنا</Link></li>
       
      </ul>
      <FontAwesomeIcon icon={faBars} className="m" style={{color: "white",
    fontSize:"22px"}}  onClick={()=>{setchange(1)} }/>
     </div>
      <FontAwesomeIcon icon={faSearch} style={{color: "white",
    fontSize:"22px"}}/>



</div>
<div className='left'>
       
        <div className='title1'>
          <p className='p1'> تواصل معنا لأي اسئلة</p>
          <p className='p1'> 966506056160+<span><FontAwesomeIcon icon={faPhone}  style={{color: "white",marginRight:"10px",
    fontSize:"22px"}}/></span></p>

        </div>
        <div className='btn1'>
          <button className='btn btn-success'> <Link  to={'/Home/contact'}>تواصل معنا</Link></button>

        </div>
         


      </div>

    </div>
    
  );
};

export default Header;