import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Scroll() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://valkdigital-mock.netlify.app/api/v1/deals"
      );

      await setData(result.data.data);
      console.log(result.data, "data?");
      // const { data } = props.location.state;
    };

    fetchData();
  }, []);
  const styles = {
    width: "18rem",
    display: "inline-block",
    marginRight: "10px",
    boxShadow: "0 8px 6px -6px black",
  };

  return (
    <div>
      <h1> Top zomer deals</h1>
      <div className="horizontal_slider">
        <div className="slider_container">
          {data &&
            data.map((el, index) => {
              console.log(data, "data?");
              return (
                <Card style={styles} key={index} id={el.index}>
                  <Link
                    to={{
                      pathname: `/${index}/details`,
                      state: { data: el },
                    }}
                  >
                    <Card.Img variant="top" src={el.image} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>

                    <Card.Text>{el.description}</Card.Text>
                  </Card.Body>
                  p.p van af <p className="price-home"> {el.price}</p>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Scroll);
