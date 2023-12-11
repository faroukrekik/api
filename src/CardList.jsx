// import { Button } from "bootstrap";
import React from "react";
import { Card, Button } from "react-bootstrap";

const CardList = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.food.image} alt="taswira" />
        <Card.Body>
          <Card.Title>{el.food.label}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardList;
