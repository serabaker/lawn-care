import React from "react";
import "./Services.css";
import { FcCheckmark } from "react-icons/fc";

const Services = () => {
  const bundleBasicArr = ["Mowing", "Trimming", "Leaf Cleanup", "2 x month"];
  const basicBundleMap = bundleBasicArr.map((items) => (
    <li key={items.toString()}>{items}</li>
  ));
  const greenCheckmark = <FcCheckmark />;

  const bundleStandardArr = [
    "Mowing",
    "Trimming",
    "Leaf Blowing",
    "Shrub Pruning",
    "Discard Tree Limbs",
    "3 x month",
  ];
  const standardBundleMap = bundleStandardArr.map((items) => (
    <li key={items.toString()}>{items}</li>
  ));

  const bundlePremiumArr = [
    "Mowing",
    "Trimming",
    "Leaf Cleanup",
    "Shrub Pruning",
    "Removal of Tree Limbs",
    "Pet waste cleanup",
    "Pressure wash patio/driveway",
    "4 x month",
  ];

  const premiumBundleMap = bundlePremiumArr.map((items) => (
    <div className="map-div">
      {greenCheckmark}
      <li className="map-list"> {items}</li>
    </div>
  ));

  const bundlePrices = {
    1: "$60/mo",
    2: "$75/mo",
    3: "$95/mo",
  };
  return (
    <div id="services" className="service-container">
      <h1 className="service-header">
        {" "}
        Select the service plan that best fits your lawn needs
      </h1>

      <div className="service-wrapper">
        <div className="service-cards1">
          <div className="service-h1">
            <h1>Basic</h1>
          </div>

          <hr className="hr" />
          <ul style={{ listStyle: "none" }}>{premiumBundleMap}</ul>
          <hr className="hr" />
          <div className="bundle-prices">
            <p className="price">{bundlePrices[1]}</p>
          </div>
        </div>

        <div className="service-cards2">
          <div className="service-h1">
            <h1>Standard</h1>
          </div>
          <hr className="hr" />
          <ul style={{ listStyle: "none" }}>{premiumBundleMap}</ul>
          <hr className="hr" />
          <div className="bundle-prices">
            <p className="price">{bundlePrices[2]}</p>
          </div>
        </div>

        <div className="service-cards3">
          <div className="service-h1">
            <h1>Premium</h1>
          </div>

          <hr className="hr" />

          <ul style={{ listStyle: "none" }}>{premiumBundleMap}</ul>
          <hr className="hr" />
          <div className="bundle-prices">
            <p className="price">{bundlePrices[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
