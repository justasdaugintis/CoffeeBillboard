
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CoffeeBillboard from "../components/coffeeBillboard/coffeeBillboard";
import AddCoffee from "../components/addCoffee/coffeeModal"

/**
 * Application layout component
 */
const Layout: React.FC = () => {
  return (
    <Container fluid>
      <AddCoffee/>
      <Row>
        <Col>
          <CoffeeBillboard/>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
