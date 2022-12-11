import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resource-container">
      <div className="resource-wrapper">
        <div className="card-div">
          <h1 className="card-header">Card header</h1>
          <div className="card-body">
            {/* <img /> */}
            <p className="resource-p">Some Text</p>
          </div>
          <div className="resource-link">
            <a href="/" className="resource-a">
              Read More...
            </a>
          </div>
        </div>

        <div className="card-div">
          <h1 className="card-header">Card header</h1>
          <div className="card-body">
            {/* <img /> */}
            <p className="resource-p">Some Text</p>
          </div>
          <div className="resource-link">
            <a href="/" className="resource-a">
              Read More...
            </a>
          </div>
        </div>

        <div className="card-div">
          <h1 className="card-header">Card header</h1>
          <div className="card-body">
            {/* <img /> */}
            <p className="resource-p">Some Text</p>
          </div>
          <div className="resource-link">
            <a href="/" className="resource-a">
              Read More...
            </a>
          </div>
        </div>

        <div className="card-div">
          <h1 className="card-header">Card header</h1>
          <div className="card-body">
            {/* <img /> */}
            <p className="resource-p">Some Text</p>
          </div>
          <div className="resource-link">
            <a href="/" className="resource-a">
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
