import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-3" style={{ backgroundColor: "#617073"}}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="text-center text-sm-left">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="text-center text-sm-left">
            <img src={require('../Images/NIN logo 2.jpg')}
              width="300rem"
              height="80rem" alt="Company Logo" />
          </Col>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="text-center text-sm-right">
            <p className="text-white mb-0">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;