import "./App.css";
import PollWidget from "./component/PollWidget";

function App() {
  return (
    <>
      <h1 className="polling-head">Polling Booth</h1>
      <div className="App">
        <PollWidget
          question="What is your favorite programming language?"
          options={["JavaScript", "Python", "Java", "C++"]}
        />
        <PollWidget
          question="What is your favorite front-end framework?"
          options={["React", "Angular", "Vue", "Svelte"]}
        />
      </div>
    </>
  );
}

export default App;
