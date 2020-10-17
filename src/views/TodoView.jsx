import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const TodoView = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Link to="/">
            <Button>Go to the list</Button>
          </Link>
          <div>TODO VIEW</div>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoView;
