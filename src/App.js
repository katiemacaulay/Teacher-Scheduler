import React from "react";
import ReactRouter from "./AppRouter"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          Specials Scheduler
        </header>
        <main>
          <ReactRouter/>
        </main>
      </div>
    );
  }
}

export default App;