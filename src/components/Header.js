import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faUserCircle,
  faBatteryFull,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";

const BarIcon = ({ icon }) => (
  <li>
    <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
  </li>
);

function Header() {
  const time = new Date();
  const h = time.getHours();
  const s = time.getSeconds();

  return (
    <div>
      <ul className="iconsHeader">
        <BarIcon icon={faSignal} />
        <BarIcon icon={faWifi} />
        <BarIcon icon={faBatteryFull} />
        <BarIcon icon={faQrcode} />
        <BarIcon icon={faUserCircle} />
      </ul>

      <h4>Deals</h4>
      <p>
        {h}:{s}
      </p>
    </div>
  );
}

export default Header;
