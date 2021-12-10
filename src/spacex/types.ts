import React from "react";

export interface ILaunch {
  id: string;
  name: string;
  date: string;
  details?: string;
  rocket: string;
  launchpad: string;
  capsule?: string;
  upcoming: boolean;
  crew?: string[];
}

export interface IRocket {
  id: string;
  name: string;
  description: string;
  imgUrls: string[];
  active: boolean;
  firstFlight: string;
  successRate: number;
  cost: number;
  weight: number;
}

export enum ActionType {
  SET_LOADING = "SET_LOADING",
  SET_LAUNCHES = "SET_LAUNCHES",
  SET_ROCKET_LOADING = 'SET_ROCKET_LOADING',
  ADD_ROCKET = 'ADD_ROCKET',
}

interface ISetLoading {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

interface ISetLaunches {
  type: ActionType.SET_LAUNCHES;
  payload: ILaunch[];
}
interface ISetRocketLoading {
  type: ActionType.SET_ROCKET_LOADING;
  payload: boolean;
}

interface IAddRocket {
  type: ActionType.ADD_ROCKET;
  payload: IRocket;
}

export type Actions = ISetLoading | ISetLaunches | ISetRocketLoading | IAddRocket;

export const SetLoading = (value: boolean): ISetLoading => ({
  type: ActionType.SET_LOADING,
  payload: value
})

export const SetLuanches = (value: ILaunch[]): ISetLaunches => ({
  type: ActionType.SET_LAUNCHES,
  payload: value
})

export const SetRocketLoading = (value: boolean): ISetRocketLoading => ({
  type: ActionType.SET_ROCKET_LOADING,
  payload: value
})

export const AddRocket = (value: IRocket): IAddRocket => ({
  type: ActionType.ADD_ROCKET,
  payload: value
})

export interface ISpaceXContext {
  loading: boolean;
  launches: ILaunch[];
  rocketLoading: boolean;
  rockets: Map<string, IRocket>
}

export interface Store {
  state: ISpaceXContext;
  dispatch: React.Dispatch<Actions>;
}
