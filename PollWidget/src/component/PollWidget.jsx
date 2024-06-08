import React, { useState, useEffect } from "react";
import "../App.css";

const PollWidget = ({ question, options }) => {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("");

  // Color mapping for each option
  const colorMap = {
    option1: "#ff5152",
    option2: "#4ada80",
    option3: "#ff9f74",
    option4: "#3f99ff",
  };

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

  const handleUndoData = () => {
    let undoData = options.reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {});
    setData(undoData);
    localStorage.setItem(`poll-${question}`, JSON.stringify(undoData));
  };

  const getTotalVotes = () => {
    return Object.values(data).reduce((total, count) => total + count, 0);
  };

  return (
    <div className="poll-container">
      <div className="left-side">
        <div className="poll-question">Q. {question}</div>
        <div className="poll-options">
          {options.map((item, id) => (
            <div key={id} className={`poll-margin${id + 1}`}>
              <div className="poll-option" key={item}>
                <div className="first">
                  <input
                    type="radio"
                    value={item}
                    id={item}
                    name="poll"
                    onChange={() => setSelected(item)}
                  />
                  <span className="radiomark"></span>
                  <label className="poll-label">{item}</label>
                </div>
                <div className="poll-value">
                  {data[item] || 0} <span>Vote</span>
                </div>
              </div>
              <div className="poll-count">
                <span
                  className={`poll-numbers option${id + 1}`}
                  style={{
                    width: (data[item] || 0) * 2,
                    backgroundColor: data[item] > 0 ? "" : "transparent",
                    color: "currentcolor",
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="totalCount">
          <button
            className="poll-btn"
            onClick={handleSubmitData}
            style={{
              border: selected
                ? `1px solid ${
                    colorMap[`option${options.indexOf(selected) + 1}`]
                  }`
                : "1px solid #007bff",
              backgroundColor: selected
                ? colorMap[`option${options.indexOf(selected) + 1}`]
                : "#007bff",
            }}
          >
            Submit
          </button>
          <button className="poll-button" onClick={handleUndoData}>
            Undo
          </button>
          <div className="vote-Count">
            Total Vote
            <span className="vote zoom">{getTotalVotes()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollWidget;
