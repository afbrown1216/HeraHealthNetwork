import React, { Component} from 'react';
import { NavLink } from "react-router-dom";
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav,
    NavItem, 
    Container
} from 'reactstrap'; 

class AppNavbar extends Component {
   
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({

            isOpen: !this.state.isOpen
        });
    }

    render() {
     return (
        <div className='pb-2 mb-5'> 
            <Navbar  expand="md" className="poppins-regular nav-style fixed-top " >
                <Container>
                    <NavbarBrand href="/" className='text-start'>
                        <img alt="logo" src={require('../assets/Logo.png')} className="app-logo"/>
                    Hera Health Network 
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse>
                    <Nav className="ml-auto" navbar>
                        <NavItem> 
                            <NavLink to="/Providers">
                               Providers
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>

        </div>
     )  
    }
}


export default AppNavbar;


























// const AppNavbar = () => {
//     return (  
//         <div> 

//         </div>
//     );
// }
 
// export default AppNavbar;