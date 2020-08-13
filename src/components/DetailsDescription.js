import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";

function DetailsDescription(props) {
  console.log("hello");
  return (
    <div>
      <Card>
        <ListGroup className="list-group-flush">
          <h2> Dit arrangement bevat</h2>

          {props.data.features.map((feature, index) => {
            return (
              <ListGroupItem key={index}>
                {feature}
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    float: "left",
                    color: "green",
                    marginRight: "20px",
                  }}
                />
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <h2> Over dit arrangement</h2>
        <p>{props.data.content}</p>
        <Button variant="warning" size="lg" block>
          Nu boeken
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ float: "right", color: "white" }}
          />
        </Button>
      </Card>
    </div>
  );
}

export default DetailsDescription;
