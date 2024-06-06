import React, { useState, useEffect } from "react";
import "../App.css";

const PollWidget = ({ question, options }) => {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const savedVotes = localStorage.getItem(`poll-${question}`);
    if (savedVotes) {
      setData(JSON.parse(savedVotes));
    } else {
      const initialVotes = options.reduce((acc, option) => {
        acc[option] = 0;
        return acc;
      }, {});
      setData(initialVotes);
    }
  }, [question, options]);

  const handleSubmitData = () => {
    if (selected) {
      const newData = { ...data, [selected]: data[selected] + 1 };
      setData(newData);
      localStorage.setItem(`poll-${question}`, JSON.stringify(newData));
    } else {
      alert("Please select an option before voting.");
    }
  };
  console.log(data);
  return (
    <div className="poll-container">
      <div className="poll-question">{question}</div>
      <div className="poll-options">
        {options.map((item) => (
          <div className="poll-margin">
            <div className="poll-option" key={item}>
              <div className="first">
                <input
                  type="radio"
                  value={item}
                  id={item}
                  name="poll"
                  onChange={() => setSelected(item)}
                />
                <span class="radiomark"></span>
                <label className="poll-label">{item}</label>
              </div>
              <div className="poll-value">
                {data[item] || 0} <span>Vote</span>
              </div>
            </div>
            <div className="poll-count">
              <span
                className="poll-numbers"
                style={{
                  width: data[item] * 2,
                  backgroundColor: data[item] > 0 ? "#007bff" : "transparent",
                  color: "currentcolor",
                }}
              ></span>
            </div>
          </div>
        ))}
      </div>
      <button className="poll-button" onClick={handleSubmitData}>
        Submit
      </button>
    </div>
  );
};

export default PollWidget;
