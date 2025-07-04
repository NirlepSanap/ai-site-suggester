import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <h1>🚀 AI Website Template Suggester</h1>
        <p className="subtitle">Generate layouts and content for your next website using AI.</p>
        <Form setSuggestion={setSuggestion} setLoading={setLoading} />
        {loading && <div className="loader"></div>}
        {!loading && suggestion && <Result data={suggestion} />}
      </div>
    </div>
  );
}

export default App;
