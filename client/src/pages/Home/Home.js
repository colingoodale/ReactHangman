import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
  state = {
    example: "some state!"
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Hello World</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
