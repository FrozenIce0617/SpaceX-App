import React, { useReducer } from "react";
import reducer from "spacex/context/reducer";
import { StateContext } from "spacex/context/hook";
import { initialSpaceXContext } from "spacex/constants";

// This is just for spacex, we can create specfic context for any others whenever we need
const SpaceXProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialSpaceXContext);
  const { Provider } = StateContext;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default SpaceXProvider;
