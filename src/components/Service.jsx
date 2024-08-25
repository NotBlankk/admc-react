import React from "react";
import "./Service.css"; // Import the CSS file

const Service = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <ul className="services-list">
        <li className="service-item">
          <h3>Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li className="service-item">
          <h3>Service 2</h3>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li className="service-item">
          <h3>Service 3</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className="service-item">
          <h3>Service 4</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </li>
        <li className="service-item">
          <h3>Service 5</h3>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Service;
