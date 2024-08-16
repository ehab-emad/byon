import React from 'react';
import Subtitle from '../../components/subtitle';
import { Col, Container, Row } from 'react-bootstrap';
import s5 from '../../assets/s5.png'
import Subtitle2 from '../../components/subtitle2';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';

    
    const Apply = () => {const location=useLocation()
    return (
      <Container className='py-5'>  <div style={{marginTop:"220px"}}>
      <Subtitle title={'التوظيف و التدريب'}/>
      <Subtitle2 path={location.pathname} />
   <Row
    className='s1 d-flex justify-content-center my-5 align-items-center '>
 <Col className='my-2 d-flex justify-content-center'
 lg={"6"}
 xl={"6"}
 sm={'12'}
 xs={"12"}

 
 
 
 >
<img src={s5} className='serviceimage1  ' alt='serviceimage1' width={350}/>




 </Col>
 <Col className='title2 my-2 d-flex justify-content-center'
  lg={"6"}
  xl={"6"}
  sm={'12'}
  xs={"12"}>
<h2 >التوظيف</h2>
<p>  نضم لفريق عملنا في بيون نبحث عن المواهب الجديدة للانضمام إلى فريقنا. نقدم فرص تطوير مهني لا محدودة، وتوازن بين الحياة العملية والشخصية.</p>

<button className='btn btn-success' style={{width:"60px"}}>المزيد</button>

 </Col>


</Row>  
<div style={{with:"100%",textAlign:"center"}}>  <p style={{fontSize:"40px",fontWeight:"900"}}>التدريب</p>
<p style={{fontSize:"40px",fontWeight:"900"}}>برنامجنا التدريبي يقدم لك</p></div>
<Row className='d-flex justify-content-center my-5 align-items-center'>
 <Col className='d-flex justify-content-center align-items-center flex-column'
 lg={"4"}
 xl={"4"}
 sm={"12"}
 xs={"12"}

 
 >
     <p  className='align-items-center d-flex '><FontAwesomeIcon icon={fa1} className='w' /><span>فرص تطوير مهني لا محدود</span></p>
     <p  className='align-items-center d-flex '><FontAwesomeIcon icon={fa2} className='w'/><span>خبرة من واقع ممارسة مهنية</span></p>
 </Col>
 <Col className='d-flex justify-content-center align-items-center flex-column my-2'
 lg={"4"}
 xl={"4"}
 sm={"12"}
 xs={"12"}
 
 
 ><img src={s5} className='serviceimage1' alt='serviceimage1' width={300}/>
 </Col>
 <Col className='d-flex justify-content-center align-items-center flex-column'
 lg={"4"}
 xl={"4"}
 sm={"12"}
 xs={"12"}
 
 
 > <p className='align-items-center d-flex '><FontAwesomeIcon icon={fa3}  className='w'/><span>⁠بيئة عمل مثالية</span></p>
     <p className='align-items-center d-flex '><FontAwesomeIcon icon={fa4}  className='w'/><span>مواكبة متطلبات سوق العمل السعودي</span></p>
 </Col>


</Row>
<div style={{with:"100%",textAlign:"center"}}>  <p style={{fontSize:"40px",fontWeight:"900"}}>كن جزء من فريقنا</p></div>
<Row><Col className='align-items-center d-flex justify-content-center flex-column'>
<form className='formstyle  d-flex  flex-column'>
<label htmlFor='name'>الاسم </label>
<input type='text' id='name' />
<label htmlFor='email'>البريد إلكتروني </label>
<input type='email' id='email' />
<label htmlFor='number'>رقم الهاتف  </label>
<input type='number' id='number' />
<label htmlFor='name'>التخصص </label>
<input type='text' id='name' />
<label htmlFor='bb'>التفاصيل </label>
<textarea type='text' id='bb' />
<button className='btn btn-success '>ارسال</button>


</form>



</Col></Row>
 </div></Container>

    );
};

export default Apply;