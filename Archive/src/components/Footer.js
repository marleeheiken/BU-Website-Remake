import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (  
<footer>
        <Row>
          <Col className='text-left py-3' style={{backgroundColor: '#011E40', padding:"20px", color:"#FFFFFF", display: 'flex', alignItems: 'center'}}>
            <div>
            <p>828 E. 11th Ave. Eugene, Oregon 97401</p>
            <p>Phone: <span><a href="tel:5416847201" style={{color:"#FFCD00"}}>541-684-7201</a></span> </p>
            </div>
            <a href="https://bushnelluniversity.my.salesforce-sites.com/inquiry/TargetX_Base__InquiryForm#?formId=a0b4z00000XYBpVAAX&formType=general" class="button-81" role="button" style={{ marginLeft: 'auto' }}>Request Info</a>
            <a href="https://www.bushnell.edu/admissions/apply/" class="button-81" role="button" style={{ marginLeft: '20px' }}>Apply Now</a>
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: '#152238', color: "#FFFFFF", textAlign:"center", paddingTop:"5px"}}>
          <p style={{fontSize:"12px"}}>Copyright&copy;{currentYear} SFTE120 Spring2024</p>
          <hr/>
          <p style={{fontSize:"12px"}}>Bushnell University is accredited by the <a href="https://nwccu.org/" style={{color:"#FFF"}}>Northwest Commission on Colleges and Universities</a> and holds a number of additional certifications and memberships</p>
          </Col>
        </Row>
    </footer>
  );
};
export default Footer
 