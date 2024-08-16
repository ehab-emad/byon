import React from 'react';
import { Col, Row } from 'react-bootstrap';
import s1 from '../assets/s1.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComputer, faFileArchive, faFileInvoiceDollar, faHospital, faMagnifyingGlassPlus, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import Subtitle from './subtitle';
const Section2 = () => {
    return (
        <div>
             <Subtitle title={"التوظيف و التدريب"}/>
          <Row className='s1 d-flex justify-content-center my-5 align-items-center '>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s5} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 >التوظيف</h2>
<p>  نضم لفريق عملنا في بيون نبحث عن المواهب الجديدة للانضمام إلى فريقنا. نقدم فرص تطوير مهني لا محدودة، وتوازن بين الحياة العملية والشخصية.</p>

<button className='btn btn-success' style={{width:"60px"}}>المزيد</button>

        </Col>


       </Row>   
       <Row className='s1 d-flex justify-content-center my-5 align-items-center '>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s6} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 >التدريب</h2> 
<p>برنامجنا التدريبي يقدم لك<br/>
1- فرص تطوير مهني لا محدود .<br/>
2- ⁠بيئة عمل مثالية.<br/>
3- خبرة من واقع ممارسة مهنية .<br/>
4- ⁠مواكبة متطلبات سوق العمل السعودي</p><br/>

<button className='btn btn-success' style={{width:"60px"}}>المزيد</button>

        </Col>


       </Row>   
        </div>
    );
};

export default Section2;