import Form from "./components/Form/Form";
import Graph from "./components/Graph/Graph";
import List from "./components/List/List";

import "./App.css";

function App() {
  return (
    <main>
      <div className="main-container">
        <Form />
        <Graph />
        <List />
      </div>
    </main>
  );
}

export default App;
