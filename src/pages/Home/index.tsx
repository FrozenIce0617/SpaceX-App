import React, { FC, useCallback, useEffect } from "react";
import { Container } from "@mui/material";
import { useSpaceX } from "spacex/context";
import { SetLoading, SetLuanches } from "spacex/types";
import { fetchPreviousLaunches } from "spacex/network";
import { LIMIT_COUNT } from "spacex/constants";
import Wrapper from "components/Wrapper";

const Home: FC = () => {
  const { state, dispatch } = useSpaceX();
  const { loading, launches, rockets } = state;

  // loading launches at first rendering
  useEffect(() => {
    // new function that asynchronously fetches data
    const fetchData = async () => {
      try {
        dispatch(SetLoading(true));
        const launchesData = await fetchPreviousLaunches();
        const sortedLaunches = launchesData.sort((a, b) => {
          // sort by the closest launch date to latest launch date
          const aDate = Date.parse(a.date);
          const bDate = Date.parse(b.date);
          return bDate.valueOf() - aDate.valueOf();
        });

        // slice most recent limit count
        const totalCount = sortedLaunches.length;
        const limitCount = totalCount < LIMIT_COUNT ? totalCount : LIMIT_COUNT;

        dispatch(SetLuanches(sortedLaunches.slice(0, limitCount)));
      } catch (err: any) {
      } finally {
        dispatch(SetLoading(false));
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" data-testid="launch-table-container">
      <Wrapper>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {launches.map((launch) => (
              <>{launch.name}</>
            ))}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
