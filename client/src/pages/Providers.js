import ProvidersCard from "../components/ProvidersCard";
import { Container, Row, Col } from "reactstrap";

function Providers() {
    const providers = [/* your list of providers here */];

    return (
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
    );
}

export default Providers;