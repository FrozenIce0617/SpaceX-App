import { ILaunch, IRocket } from "spacex/types";
import { fetchPreviousLaunches, fetchRocket } from "./";

test("Fetch launches from spacex api", async () => {
  const launches: ILaunch[] = await fetchPreviousLaunches();
  expect(launches).toBeDefined();

  const count: number = launches.length;
  expect(count).toBeGreaterThan(1);

  const firstLaunch: ILaunch = launches[0];
  expect(firstLaunch.id).toBeDefined();
});

test("Fetch rocket with id from spacex api", async () => {
  const mockRocketId: string = "5e9d0d95eda69955f709d1eb";
  const rocket: IRocket = await fetchRocket(mockRocketId);
  expect(rocket).toBeDefined();

  expect(rocket.id).toBeDefined();
});
