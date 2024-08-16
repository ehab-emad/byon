import React from 'react';
import ControlledCarousel from '../../sidlee';
// import Subtitle from '../../components/subtitle';
import Section1 from '../../components/section1';
import { Container } from 'react-bootstrap';
import Section2 from '../../components/section2';
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';

const Home = () => {
    return (
        <div>
      
      <Container>
    <ControlledCarousel/> 
     
      <Section1 title={"المزيد"} path={'/Home/service'}/>
     
      <Section2  />

      </Container>
        </div>
    );
};

export default Home;