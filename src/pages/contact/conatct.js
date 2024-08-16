import React from 'react';
import Subtitle2 from '../../components/subtitle2';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Conatct = () => {
    const location=useLocation()
    return (
       <Container style={{marginTop:"120px"}}>
        <Row className='d-flex justify-content-center my-5 align-items-center'>
            <Col className='d-flex justify-content-center my-5 align-items-center'> <div>
            <Subtitle2 path={location.pathname}/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54968.23262708684!2d31.04986488232019!3d30.5630170727156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d68b68933ea3%3A0x77434af2db2fa06f!2z2LTYqNmK2YYg2KfZhNmD2YjZhdiMINmC2LPZhSDYtNio2YrZhiDYp9mE2YPZiNmF2Iwg2LTYqNmK2YYg2KfZhNmD2YjZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YXZhtmI2YHZitip!5e0!3m2!1sar!2seg!4v1723670518891!5m2!1sar!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='jj'/>
        </div></Col>
        </Row>
        <Row><Col className='align-items-center d-flex justify-content-center flex-column my-3'>
<form className='formstyle  d-flex  flex-column'>
<label htmlFor='name'>اسم المنشأة </label>
<input type='text' id='name' />
<label htmlFor='email'>البريد إلكتروني </label>
<input type='email' id='email' />
<label htmlFor='number'>رقم الهاتف  </label>

<button className='btn btn-success '>ارسال</button>


</form>



</Col></Row>

       </Container>
    );
};

export default Conatct;