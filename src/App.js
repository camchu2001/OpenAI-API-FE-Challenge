import logo from "./logo.svg";
import "./App.css";
import Responses from "./components/Response";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="Prompt">
        <h1>Fun With AI</h1>

        <form onSubmit={onSubmit}>
          <label>Enter Prompt: </label>
          <br />
          <br />
          <textarea type="text" id="prompt" name="prompt"></textarea>
          <input type="submit" id="button" defaultValue="Submit" />
        </form>
      </div>
      <Responses></Responses>
    </div>
  );
}
export default App;
