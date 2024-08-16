import React from 'react';
import Subtitle from '../../components/subtitle';
import Section1 from '../../components/section1';
import Subtitle2 from '../../components/subtitle2';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Service = () => {
    const location=useLocation()
    return (
       <Container style={{marginTop:"220px"}}> 
       {console.log(location.pathname)}
         <Subtitle2 path={location.pathname}/>
         <Section1   path={'/Home/contact'} title={"طلب الخدمة"}/>
         
     </Container>
    );
};

export default Service;