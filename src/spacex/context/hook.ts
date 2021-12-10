import { createContext, useContext } from "react";
import { Store } from "spacex/types";
import { initialStore } from "spacex/constants";

export const StateContext =
  createContext<Store>(initialStore);

function useSpaceX(initialData: Store = initialStore) {
  const context: Store = useContext<Store>(StateContext);
  if (!context) {
    throw new Error("useSpaceX must be used within a SpaceXProvider");
  }
  return { ...initialData, ...context };
}

export default useSpaceX;
