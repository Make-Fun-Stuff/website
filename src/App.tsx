import { useEffect } from "react";
import logo from "./logo512.png";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Make Fun Stuff";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;