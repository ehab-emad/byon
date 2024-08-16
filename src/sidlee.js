// import p1 from '../p1.webp'
// import p2 from '../p2.webp'
// import po2 from '../po2.webp'
import p1 from './p1.webp'
import q1 from './assets/q1.webp'
import q2 from './assets/q2.webp'
import q3 from './assets/q3.webp'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

 
 // أزرار مخصصة لـ Next و Previous
 import { useState } from 'react';
 import Carousel from 'react-bootstrap/Carousel';
//  import ExampleCarouselImage from 'components/ExampleCarouselImage';
 
 function ControlledCarousel() {
   const [index, setIndex] = useState(0);
 
   const handleSelect = (selectedIndex) => {
     setIndex(selectedIndex);
   };
 
   return (
     <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item className=''>
         <img src={q1} className="d-block w-100" text="First slide"  alt='slider1'/>
         <Carousel.Caption className='d'>
           <h3>بيون محاسبون </h3>
           <p>
منصة رقمية  تقدم الخدمات المهنية والاستشارية في مجال المحاسبة والزكاة  للمنشآت المتوسطة  والصغيرة ورواد الأعمال 
							</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item className=''>
       <img src={q2} className="d-block w-100" text="First slide"  alt='slider2'/>

         <Carousel.Caption className='d'>
           
           <p>تساهم الخدمات الرقمية المقدمة من منصة بيون  في خفض التكاليف التشغيلية للمنشآت الصغيرة ورواد الاعمال  
           </p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item className=''>
       <img src={q3} className="d-block w-100" text="First slide" alt='slider3'/>

         <Carousel.Caption className='d'>
           
           <p>
           في  بيون محاسبون نساعدكم في التعامل مع الأنظمة والقوانين والمتطلبات الزكوية والضريبية والتي تساعدك في تجنب الغرامات والعقوبات الناتجة عن  الأخطاء في تقديم المعلومات الزكوية والضريبية 
							
           </p>
         </Carousel.Caption>
       </Carousel.Item >
     </Carousel>
   );
 }
 
 export default ControlledCarousel;