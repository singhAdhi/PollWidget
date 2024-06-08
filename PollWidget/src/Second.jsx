import React from "react";
import PollWidget from "./component/PollWidget";
import Footer from "./component/Footer";

const Second = () => {
  return (
    <div className="App">
      <PollWidget
        question="What is your favorite front-end framework?"
        options={["React", "Angular", "Vue", "Svelte"]}
      />
      <Footer />
    </div>
  );
};

export default Second;
