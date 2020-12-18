import './MainPart.css';
import React from 'react';
import ExchangeData from '../../assets/ExchangeData';
import { Link } from 'react-router-dom';

export default function MainPart(props) {
    return (
        <div className="main-main-div">
            <div className="form-container">
                <form>
                    <input
                        type="number"
                        id="number1"
                        min="1"
                        step="1"
                        value={props.myProductAmount}
                        onChange={(event) => {
                            props.setMyProductAmount(event.target.value);
                        }}
                    ></input>
                    <select
                        onChange={(event) => {
                            props.setMyProduct(event.target.value);
                            const iconSrc = ExchangeData.find(
                                (data) => data.value === event.target.value
                            ).icon;
                            import(`../../assets/icons/${iconSrc}.png`).then(
                                (icon) => {
                                    props.setMyProductIcon(icon);
                                }
                            );
                        }}
                        value={props.myProduct}
                    >
                        {ExchangeData.map((data) => (
                            <option value={data.value}>{data.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="form-container">
                <form>
                    <select
                        className="select-desired-product"
                        onChange={(event) => {
                            props.setDesiredProduct(event.target.value);
                            const iconSrc = ExchangeData.find(
                                (data) => data.value === event.target.value
                            ).icon;
                            import(`../../assets/icons/${iconSrc}.png`).then(
                                (icon) => {
                                    props.setDesiredProductIcon(icon);
                                }
                            );
                        }}
                        value={props.desiredProduct}
                    >
                        {ExchangeData.map((data) => (
                            <option value={data.value}>{data.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="upper-buttons-container">
                <button onClick={props.updateRatios}>Update</button>
                <button>Fix Trade</button>
                <button
                    onClick={() => {
                        props.setMyProductAmount('');
                        props.setDesiredProductAmount('');
                    }}
                >
                    Reset
                </button>
            </div>
            <div className="img-Container">
                <img src={props.myProductIcon.default} alt="" />
                <div class="triangle-right"></div>
                <img src={props.desiredProductIcon.default} alt="" />
            </div>
            <textarea
                value={`The valid trade is: ${props.myProductAmount} ${props.myProduct} are worth ${props.desiredProductAmount} ${props.desiredProduct}. This is a ${props.tradeFairness} trade.`}
            ></textarea>
            <div className="lower-buttons-container">
                {/* <button onClick={props.updateRatios}>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button> */}
                <button className="show-other-trades-button">
                    <Link to="/other_trades">Show Other trades</Link>
                </button>
            </div>
        </div>
    );
}
