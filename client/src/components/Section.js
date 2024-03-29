import React from 'react';
import { Container, Row,Col, Button } from 'reactstrap';

const Section = () => {

    return ( 
        <div> 
            <Container>
               <Row className=''> 
                    <Col className='col-6'> 
                        <img alt="Hera Avatar" src={require('../assets/HeraAvatarShadow.png')} className='avatar-shadow' /> 
                    </Col>
                    <Col className='col-6'> 
                        <h1 className='poppins-semibold'>
                            Hi, I'm Hera!
                        </h1>
                        <p className='lead poppins-regular'> 
                            Your personalized healthcare matchmaker
                        </p>
                        <Button className='btn-blue shadow-sm'>
                            Get started
                        </Button>
                    </Col>
               </Row>
               <Row>
                <h2> 
                    Discovering your perfect provider made easy,simple, and stress-free
                </h2>
                <img alt="Search avatar" src={require('../assets/Hera_Health_Network_Homepage_Image.png')} className='search-img mx-auto' />
                <Button className='btn-white mx-auto'>
                    Browse providers 
                </Button>

               </Row>
               <Row className='mt-5'>
                <p className='poppins-regular text-center'>
                We use our AI, Hera, to match you with the perfect healthcare provider based on your preferences. Hera listens to what you need and finds the best options. It’s like having your own personal healthcare matchmaker! With Hera, personalized healthcare is simple and stress-free. Let’s stay healthy together!
                </p>
               </Row>
            </Container>
        </div>
     );
}
 
export default Section;