import "./index.css";

import { useState } from "react";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  const [data, setData] = useState<string>("");
  const fetchFromAPI = async () => {
    const res = await fetch("api/hello");
    const data = await res.json();
    setData(data.message);
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <h1>Bun + React</h1>
      <p>Data from API: {data}</p>
      <button onClick={fetchFromAPI}>Fetch from API</button>
    </div>
  );
}

export default App;
