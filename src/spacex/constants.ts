import { Store, ISpaceXContext, IRocket } from "spacex/types";

export const LIMIT_COUNT: number = 50;
export const SPACEX_BASE_URL = "https://api.spacexdata.com/v4";

export const initialSpaceXContext: ISpaceXContext = {
  launches: [],
  loading: false,
  rocketLoading: false,
  rockets: new Map<string, IRocket>(),
};

export const initialStore: Store = {
  state: initialSpaceXContext,
  dispatch: () => undefined,
};
