import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faUserCircle,
  faBatteryFull,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const time = new Date();
  const h = time.getHours();
  const s = time.getSeconds();

  return (
    <div>
      <ul className="iconsHeader">
        <li>
          <FontAwesomeIcon icon={faSignal} style={{ marginRight: "5px" }} />
        </li>
        <li>
          <FontAwesomeIcon icon={faWifi} style={{ marginRight: "5px" }} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faBatteryFull}
            style={{ marginRight: "5px" }}
          />
        </li>
        <br />
        <li>
          <FontAwesomeIcon icon={faQrcode} style={{ marginRight: "5px" }} />
        </li>

        <li>
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ marginleft: "20px", float: "right" }}
          />
        </li>
      </ul>

      <h4>Deals</h4>
      <p>
        {h}:{s}
      </p>
    </div>
  );
}

export default Header;
