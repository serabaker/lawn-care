import React from "react";

const Services = () => {
  const bundleBasicArr = ["Mowing", "Trimming", "Leaf Cleanup", "2 x monthly"];
  const basicBundleMap = bundleBasicArr.map((items) => <li>{items}</li>);

  const bundleStandardArr = [
    "Mowing",
    "Trimming",
    "Leaf Blowing",
    "Shrub Pruning",
    "Discard Tree Limbs",
    "3 x monthly",
  ];
  const standardBundleMap = bundleStandardArr.map((items) => <li>{items}</li>);

  const bundlePremiumArr = [
    "Mowing",
    "Trimming",
    "Leaf Cleanup",
    "Shrub Pruning",
    "Removal of Tree Limbs",
    "Pet waste cleanup",
    "Pressure Washer Patio/Driveway",
    "4 x monthly",
  ];

  const premiumBundleMap = bundlePremiumArr.map((items) => <li>{items}</li>);

  const bundlePrices = {
    1: "$60.00/month",
    2: "75.00/month",
    3: "95.00/month",
  };
  return (
    <div className="service-container">
      <div className="service-wrapper">
        <h1>Basic</h1>
        <div className="bundle-list">
          <ul>{basicBundleMap}</ul>
        </div>
        <p>{bundlePrices[0]}</p>
      </div>

      <div className="service-wrapper">
        <h1>Basic</h1>
        <div className="bundle-list">
          <ul>{standardBundleMap}</ul>
        </div>
        <p>{bundlePrices[1]}</p>
      </div>

      <div className="service-wrapper">
        <h1>Basic</h1>
        <div className="bundle-list">
          <ul>{premiumBundleMap}</ul>
        </div>
        <p>{bundlePrices[2]}</p>
      </div>
    </div>
  );
};

export default Services;
