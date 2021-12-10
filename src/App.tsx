import React from "react";
import { SpaceXProvider } from "spacex/context";
import Home from "pages/Home";

function App() {
  return (
    <SpaceXProvider>
      <Home />
    </SpaceXProvider>
  );
}

export default App;
