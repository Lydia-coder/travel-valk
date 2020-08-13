import React, { useState } from "react";
import DetailsDescription from "./DetailsDescription";
import DetailsHotel from "./DetailsHotels";
import { Card } from "react-bootstrap";

function ScrollDealsDetails(props) {
  let [showResultsHotel, setShowResultsHotel] = useState(false);

  let [showResultsDes, setShowResultsDes] = useState(true);

  const onClickHotel = () => {
    setShowResultsHotel(true);
    setShowResultsDes(false);
  };

  const onClickDes = () => {
    setShowResultsDes(true);
    setShowResultsHotel(false);
  };

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={props.location.state.data.image}
          style={{ width: "100%" }}
        />
      </Card>
      <Card>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            {props.location.state.data.title}
          </Card.Title>
          <Card.Text>{props.location.state.data.description}</Card.Text>
          <p>van af p.p {props.location.state.data.price}</p>
        </Card.Body>
      </Card>
      <button className="toggle-btn-1" onClick={onClickDes}>
        beschrijving
      </button>
      <button className="toggle-btn-2" onClick={onClickHotel}>
        beschikbare hotels ({props.location.state.data.title.length})
      </button>
      {showResultsHotel && <DetailsHotel />}

      {showResultsDes && (
        <DetailsDescription data={props.location.state.data} />
      )}
    </div>
  );
}

export default ScrollDealsDetails;
