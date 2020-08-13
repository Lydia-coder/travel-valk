import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AllDeals() {
  return (
    <div className="deals">
      <h2>All Deals</h2>
      <ListGroup>
        <ListGroup.Item onClick={() => alert("Arrangement")}>
          Arrangement
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>

        <ListGroup.Item onClick={() => alert("Valk voordeel")}>
          Valk voordeel
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>
        <ListGroup.Item onClick={() => alert("Feestdagen")}>
          Feestdagen
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>
        <ListGroup.Item onClick={() => alert("Last minutes")}>
          Last minutes
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>
        <ListGroup.Item onClick={() => alert("Non refundables")}>
          Non Refundables
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>
        <ListGroup.Item onClick={() => alert("early birds")}>
          Early Birds
          <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AllDeals;
