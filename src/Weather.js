import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input type="search" 
          placeholder="Enter a city.." className="form-control"
          autoFocus="on" />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
        </div>
      </div>  
    </form>
    <h1>New York</h1>
    <ul>
      <li>Friday 12:00</li>
      <li>Sure</li>
    </ul>
  
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
          alt="Sure" className="float-left" />
          <div className="float-left">
            <span className="temperature">3</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 0%</li>
          <li>Humidity: 40%</li>
          <li>Wind: 13 km/h</li>
        </ul>
      </div>
    </div>
  </div>
  );
}