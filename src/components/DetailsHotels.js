import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DetailsHotels() {
  let [dataHotel, setDataHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://valkdigital-mock.netlify.app/api/v1/hotels"
      );

      await setDataHotel(result.data.data);
      console.log(result.data, "data hotels??");
      // const { data } = props.location.state;
    };

    fetchData();
  }, []);
  return (
    <div>
      {dataHotel &&
        dataHotel.map((el) => {
          return (
            <span key={el.code} className="list-group-flush">
              <img src={el.photo} alt={el.name} />
              {el.name}
            </span>
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
