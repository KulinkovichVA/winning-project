import "./MainPart.css";
import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";

export default function MainPart(props) {
  const [currentRate, setCurrentRate] = useState({ ...props.data });
  const [myProduct, setMyProduct] = useState("EGG");
  const [myProductAmount, setMyProductAmount] = useState(0);
  const [desiredProduct, setDesiredProduct] = useState("EGG");
  const [desiredProductAmount, setDesiredProductAmount] = useState(0);

  useEffect(() => {
    setCurrentRate({ ...props.data });
  }, [props.data]);

  const countPrice = () => {
    setDesiredProductAmount(
      Math.round(
        (myProductAmount * currentRate[myProduct]) / currentRate[desiredProduct]
      )
    );
  };

  const updateRatios = () => {
    let newDataWithFluctuation = { ...props.data };
    const min = -0.05;
    const max = 0.05;
    Object.keys(newDataWithFluctuation).forEach((key) => {
      newDataWithFluctuation[key] =
        newDataWithFluctuation[key] + (Math.random() * (max - min) + min);
    });
    setCurrentRate(newDataWithFluctuation);
  };

  return (
    <div className="main-main-div">
      <div>
        <form>
          <input
            type="number"
            id="number1"
            onChange={(event) => {
              setMyProductAmount(event.target.value);
            }}
          ></input>
          <select
            onChange={(event) => {
              setMyProduct(event.target.value);
            }}
          >
            <option value="EGG">egg</option>
            <option value="CABBAGE">cabbage</option>
            <option value="FARMER">services of a sexy farmer (1 hour)</option>
            <option value="POTATO">potato</option>
            <option value="APPLES">apples</option>
            <option value="BREAD">bread</option>
            <option value="WINE">wine</option>
            <option value="pLATE">beer mug</option>
            <option value="JAR">jar of "happy" mushrooms</option>
            <option value="CHICKEN">chicken</option>
            <option value="PIG">fat pig</option>
            <option value="COW">cow</option>
            <option value="HORSE">horse</option>
          </select>
        </form>
      </div>
      <div>
        <form>
          <input
            type="number"
            id="number1"
            value={desiredProductAmount}
          ></input>
          <select
            onChange={(event) => {
              setDesiredProduct(event.target.value);
            }}
          >
            <option value="EGG">egg</option>
            <option value="CABBAGE">cabbage</option>
            <option value="FARMER">services of a sexy farmer (1 hour)</option>
            <option value="POTATO">potato</option>
            <option value="APPLES">apples</option>
            <option value="BREAD">bread</option>
            <option value="WINE">wine</option>
            <option value="pLATE">beer mug</option>
            <option value="JAR">jar of "happy" mushrooms</option>
            <option value="CHICKEN">chicken</option>
            <option value="PIG">fat pig</option>
            <option value="COW">cow</option>
            <option value="HORSE">horse</option>
          </select>
        </form>
      </div>
      <div className='upper-buttons-container'>
        <button onClick={countPrice}><div>Count</div></button>
        <button><div>Reset</div></button>
      </div>
      <div className='img-Container'>
        <img src="https://via.placeholder.com/150" alt="" />
        <div class="triangle-right"></div>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>
      <p>text from props</p>
      <div className='lower-buttons-container'>
        <button onClick={updateRatios}><div>Update ratios</div></button>
        <button><div>Reverse trade</div></button>
        <button><div>Ratio fluctuation</div></button>
        <button><div>Other trades</div></button>
      </div>
    </div>
  );
}
