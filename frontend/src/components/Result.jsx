import React from "react";
import "./Result.css";

const Result = ({ data }) => {
  return (
    <div className="result">
      <h2>🧠 Suggested Template: <span>{data.template}</span></h2>

      <div className="card-section">
        <h3>📐 Layout</h3>
        <ul>
          {data.layout.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card-section">
        <h3>🎯 Hero Section</h3>
        <p>{data.content.hero}</p>
      </div>

      <div className="card-section">
        <h3>📖 About Section</h3>
        <p>{data.content.about}</p>
      </div>

      <div className="card-section">
        <h3>🛠 Services</h3>
        <ul>
          {data.content.services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;
