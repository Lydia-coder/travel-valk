import React, { useState } from "react";
import DetailsDescription from "./DetailsDescription";
import DetailsHotel from "./DetailsHotels";
import { Card } from "react-bootstrap";
import { formatPrice } from "../helpers";

function ScrollDealsDetails(props) {
  const [showingDescription, setShowingDescription] = useState(true);
  const onClickDescription = () => {
    setShowingDescription(true);
  };
  const onClickHotels = () => {
    setShowingDescription(false);
  };

  const { data } = props.location.state;
  const {
    description,
    image,
    price,
    title,
    hotels,
  } = props.location.state.data;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} style={{ width: "100%" }} />
      </Card>
      <Card>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>vanaf p.p {formatPrice(price)}</p>
        </Card.Body>
      </Card>
      <button className="toggle-btn-1" onClick={onClickDescription}>
        beschrijving
      </button>
      <button className="toggle-btn-2" onClick={onClickHotels}>
        beschikbare hotels ({hotels.length})
      </button>
      {showingDescription && <DetailsDescription data={data} />}
      {!showingDescription && <DetailsHotel />}
    </div>
  );
}

export default ScrollDealsDetails;
