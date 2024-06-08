import "./App.css";
import PollWidget from "./component/PollWidget";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="App">
        <PollWidget
          question="What is your favorite programming language?"
          options={["JavaScript", "Python", "Java", "C++"]}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
