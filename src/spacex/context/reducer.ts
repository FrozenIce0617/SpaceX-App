import { Reducer } from "react";
import { ISpaceXContext, Actions, ActionType, IRocket } from "spacex/types";

const reducer: Reducer<ISpaceXContext, Actions> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionType.SET_LAUNCHES:
      return { ...state, launches: action.payload };
    case ActionType.SET_ROCKET_LOADING:
      return { ...state, rocketLoading: action.payload };
    case ActionType.ADD_ROCKET:
      const rocket: IRocket = action.payload;
      if (state.rockets.has(rocket.id)) {
        return { ...state };
      } else {
        const newRockets = new Map(state.rockets);
        newRockets.set(rocket.id, rocket);
        return { ...state, rockets: newRockets };
      }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export default reducer;
