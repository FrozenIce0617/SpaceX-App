import { ILaunch, IRocket } from "spacex/types";
import { SPACEX_BASE_URL } from "spacex/constants";

// parse the launches json data to ILaunch
function parseLaunch(json: any): ILaunch {
  return {
    id: json.id,
    name: json.name,
    date: json.date_utc,
    details: json.details,
    rocket: json.rocket,
    launchpad: json.launchpad,
    upcoming: json.upcoming,
    capsule: json.capsules?.length > 0 ? json.capsules[0] : undefined,
    crew: json.crew,
  };
}

/**
 * Returns past launches from the SpaceX API.
 *
 * url: https://api.spacexdata.com/v4/launches/past
 */
export async function fetchPreviousLaunches(): Promise<ILaunch[]> {
  const response = await fetch(`${SPACEX_BASE_URL}/launches/past`);
  const jsonResponse = await response.json();

  const launches: ILaunch[] = jsonResponse?.map((launch: any) => parseLaunch(launch))

  return launches || [];
}

// parse the rocket json data to IRocket
function parseRocketResult(json: any): IRocket {
  return {
    id: json.id,
    name: json.name,
    active: json.active,
    description: json.description,
    imgUrls: json.flickr_images,
    firstFlight: json.first_flight,
    successRate: json.success_rate_pct,
    cost: json.cost_per_launch,
    weight: json.mass.lb,
  };
}

/**
 * Returns detailed info about the rocket from the SpaceX api
 *
 * url: https://api.spacexdata.com/v4/rockets/{{id}}
 * @param rocket id of the rocket in the api
 */
 export async function fetchRocket(rocket: string): Promise<IRocket> {
  const response = await fetch(`${SPACEX_BASE_URL}/rockets/${rocket}`);
  const json = await response.json();

  return parseRocketResult(json);
}