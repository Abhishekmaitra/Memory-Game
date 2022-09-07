import logo from "./logo.svg";
import "./index.css";
import Cards from "./Components/Cards";
function App() {
  return (
    <div className="App">
      <h1>The Memory Game</h1>
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
