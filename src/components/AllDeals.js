import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ label, onClick }) => (
  <ListGroup.Item onClick={onClick}>
    {label}
    <FontAwesomeIcon icon={faAngleRight} style={{ float: "right" }} />
  </ListGroup.Item>
);

function AllDeals() {
  const openPage = (pageId) => {
    alert(pageId);
  };

  return (
    <div className="deals">
      <h2>All Deals</h2>
      <ListGroup>
        <ListItem label="Arrangement" onClick={() => openPage("arrangement")} />
        <ListItem
          label="Valk voordeel"
          onClick={() => openPage("valk-voordeel")}
        />
        <ListItem label="Feestdagen" onClick={() => openPage("feestdagen")} />
        <ListItem
          label="Last minutes"
          onClick={() => openPage("last-minutes")}
        />
        <ListItem
          label="Non refundables"
          onClick={() => openPage("non-refundables")}
        />
        <ListItem label="Early birds" onClick={() => openPage("early-birds")} />
      </ListGroup>
    </div>
  );
}

export default AllDeals;
