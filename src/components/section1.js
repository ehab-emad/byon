import React from 'react';
import { Col, Row } from 'react-bootstrap';
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.webp'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComputer, faFileArchive, faFileInvoiceDollar, faHospital, faMagnifyingGlassPlus, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import Subtitle from './subtitle';
import { Link, useLocation } from 'react-router-dom';
// import Subtitle2 from './subtitle2';
const Section1 = ({title,path}) => {
  
    return (
       <div style={{marginTop:"220px"}}>
        <Subtitle title={'الخدمات'}/>
      
       <Row className='s1 d-flex justify-content-center my-5 align-items-center '>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s1} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 >خدمة مسك الدفاتر والسجلات المحاسبية</h2>
<p>نقدم لعملائنا الخدمات التي تجنبهم التكاليف العالية التي يتكبدها قسم المحاسبة في المنشأة، فمن خلال مسك الدفاتر والخدمات المحاسبية المتعلقة بها، تستطيع إدارة المنشأة قياس تأثير العمليات والأحداث والظروف على المركز المالي وقائمة الدخل، وتحديد نتائج أعمالها بدقة.</p>
<div className='d-flex justify-content-between'>
    <p>خدمة مسك الدفاتر<span><FontAwesomeIcon icon={faBook} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
    <p>  خدمة محاسب<span><FontAwesomeIcon icon={faFileArchive} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
</div>
<Link to={path}><button className='btn btn-success' style={{width:"120px"}}>{title}</button></Link>

        </Col>


       </Row>
        <Row className='s1 d-flex justify-content-center align-items-center my-5'>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s2} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 > خدمات المراجعة والتدقيق
</h2>
<p> 
خدمات المراجعة والتدقيق
تهدف خدمات التأكيد ومراجعة وتدقيق القوائم المالية إلى تعزيز درجة ثقة المستخدمين المعنيين بالقوائم المالية، وذلك من خلال إبداء رأي مراجعين قانونيين مستقلين، فيما إذا كانت القوائم المالية قد تم إعدادها من جميع النواحي الجوهرية قياساً وعرضاً وإفصاحاً، طبقاً لإطار التقرير المالي المعمول به.</p>
<div className='d-flex justify-content-between'>
    <p>مراجعة القوائم المالية<span><FontAwesomeIcon icon={faFileInvoiceDollar} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
    <p>   ⁠مراجعة داخليه<span><FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
</div>
<Link to={path}><button className='btn btn-success' style={{width:"120px"}}>{title}</button></Link>


        </Col>


       </Row>
       <Row className='s1 d-flex justify-content-center align-items-center my-5'>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s3} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 >خدمة الزكاة والضريبة</h2>
<p>قوم بتوجيه عملائنا التوجيه السليم ونقدم لهم الاستشارات الزكوية والضريبية بما يضمن الاستثمار الأمثل لأموالهم وفق خطوات مدروسة ومتوافقة مع الأنظمة والتشريعات. </p>
<div className='d-flex justify-content-between'>
    <p>ضريبة القيمة المضافة<span><FontAwesomeIcon icon={faFileArchive} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
    <p>  خدمات الزكاة<span><FontAwesomeIcon icon={faSackDollar} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
</div>
<Link to={path}><button className='btn btn-success' style={{width:"120px"}}>{title}</button></Link>


        </Col>


       </Row>
       <Row className='s1 d-flex justify-content-center align-items-center my-5'>
        <Col className='my-2'
        lg={"6"}
        xl={"6"}
        sm={'12'}
        xs={"12"}

        
        
        
        >
<img src={s4} className='serviceimage1' alt='serviceimage1' width={400}/>




        </Col>
        <Col className='title2 my-2'
         lg={"6"}
         xl={"6"}
         sm={'12'}
         xs={"12"}>
<h2 >خدمة الأنظمة والبرامج</h2>
<p>  
خدمة الأنظمة والبرامج
نقدم لكم أفضل البرامج التي تساعد الإدارة على إدارة المنشأة لتسهيل عملية الرقابة والتأكد من صحة البيانات، كما نقوم بتطوير الأنظمة والتطبيقات التي تلبي احتياجات عملائنا.</p>
<div className='d-flex justify-content-between'>
    <p>خدمة مسك الدفاتر<span><FontAwesomeIcon icon={faHospital} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
    <p>  خدمة محاسب<span><FontAwesomeIcon icon={faComputer} style={{color: "#186250",marginRight:"7px",
    fontSize:"22px"}}/></span></p>
</div>
<Link to={path}><button className='btn btn-success' style={{width:"120px"}}>{title}</button></Link>


        </Col>


       </Row>
       
       </div>
       
    );
};

export default Section1;