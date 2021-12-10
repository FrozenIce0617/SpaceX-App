import React from "react";
import { SpaceXProvider } from "spacex/context";

function App() {
  return (
    <SpaceXProvider>
      <div className="App">Space App</div>
    </SpaceXProvider>
  );
}

export default App;
