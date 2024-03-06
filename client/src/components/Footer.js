import React, { Component} from 'react';
import {  
    Navbar, 
    NavbarBrand, 
    Nav,
    NavItem, 
    NavLink, 
    Container
} from 'reactstrap'; 


const Footer = () => {
    return ( 
        <div > 
            {/* <Navbar  expand="md" className="poppins-regular nav-style " id="navBar">
                <Container>
                    <NavbarBrand href="/" className='text-start'>
                        <img alt="logo" src={require('../assets/Logo.png')} className="app-logo"/>
                    Hera Health Network 
                    </NavbarBrand>
                    <NavItem>
                        <NavLink>
                            <img alt='Instagram icon'src={require('../assets/instaIcon.png')} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <img alt='Facebook icon'src={require('../assets/facebookIcon.png')} />
                        </NavLink>
                    </NavItem>
                </Container>
            </Navbar> */}



            
            <Container className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 footer ">
                <div className="col-md-4 d-flex align-items-center poppins-regular nav-style">
                <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                    <img alt="logo" src={require('../assets/Logo.png')} className="app-logo"/>
                </a>
                <span className="">Hera Health Network </span>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex poppins-regular nav-style">
                    <li className="ms-3"><NavLink href='https://www.instagram.com/'><img alt='Instagram icon'src={require('../assets/instaIcon.png')} /></NavLink></li>
                    <li className="ms-3"><NavLink href='https://www.facebook.com'><img alt='Facebook icon'src={require('../assets/facebookIcon.png')} /></NavLink></li>
                </ul>
                </div>

              
            </Container>


        </div>
     );
}
 
export default Footer;




