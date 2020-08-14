import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DetailsHotels() {
  const [dataHotel, setDataHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://valkdigital-mock.netlify.app/api/v1/hotels"
      );

      setDataHotel(result.data.data);
      // const { data } = props.location.state;
    };

    fetchData();
  }, []);
  return (
    <div>
      {dataHotel &&
        dataHotel.map((el) => {
          return (
            <Card key={el.code} className="hotel-card">
              <Card.Img src={el.photo} alt={el.name} />{" "}
              <Card.Text className="hotel-text"> {el.name} </Card.Text>
            </Card>
          );
        })}
      <Button variant="warning" size="lg" block>
        Nu boeken
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ float: "right", color: "white" }}
        />
      </Button>
    </div>
  );
}

export default DetailsHotels;
