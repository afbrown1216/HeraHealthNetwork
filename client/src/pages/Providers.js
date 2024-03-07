import ProvidersCard from "../components/ProvidersCard";
import { Container, Row, Col } from "reactstrap";
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import providers from "../assets/mockProviderData.json";

function Providers() {
    

    return (
        <>
         <AppNavbar/>
         <Container>
            {providers.map((provider, index) => (
                <Row key={index}>
                    <Col>
                        <ProvidersCard provider={provider} />
                    </Col>
                    <Col>
                        <ProvidersCard provider={provider} />
                    </Col>
                </Row>
            ))}
        </Container>
        <Footer/>
        </>
        
    );
}

export default Providers;