import { useState } from "react";

import Form from "./components/Form/Form";
import Graph from "./components/Graph/Graph";
import List from "./components/List/List";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const addNewExpense = () => setData();

  return (
    <main>
      <div className="main-container">
        <Form add={addNewExpense} data />
        <Graph />
        <List />
      </div>
    </main>
  );
}

export default App;
