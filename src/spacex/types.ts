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
