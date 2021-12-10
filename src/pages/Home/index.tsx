import React, { FC, useState, useCallback, useEffect } from "react";
import { Container, Button } from "@mui/material";
import { useSpaceX } from "spacex/context";
import {
  AddRocket,
  SetLoading,
  SetLuanches,
  SetRocketLoading,
} from "spacex/types";
import { fetchPreviousLaunches, fetchRocket } from "spacex/network";
import { LIMIT_COUNT, EMPTY_STRING } from "spacex/constants";
import Wrapper from "components/Wrapper";
import AgTable from "components/Table";
import { IColHeader } from "components/Table/types";
import RocketDetailsModal from "components/RocketDetails";

const Home: FC = () => {
  const { state, dispatch } = useSpaceX();
  const { loading, launches, rockets, rocketLoading } = state;
  const [activeRocketId, setActiveRocketId] = useState<string>(EMPTY_STRING);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const getActiveRocket = useCallback(
    () => rockets.get(activeRocketId),
    [rockets, activeRocketId]
  );

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
        setOpenModal(false);
      } finally {
        dispatch(SetLoading(false));
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const detailsRender = (param: any) => (
    <Button
      onClick={() => {
        const rowIndex = param.rowIndex;
        const rocketId = launches[rowIndex]?.rocket;
        setActiveRocketId(rocketId);
        if (rocketId !== EMPTY_STRING) {
          fetchRocketData(rocketId);
          setOpenModal(true);
        }
      }}
      data-testid={`details-button-${param.rowIndex}`}
    >
      View Rocket Details
    </Button>
  );

  const fetchRocketData = async (rocketId: string) => {
    try {
      if (!rockets.has(rocketId)) {
        dispatch(SetRocketLoading(true));
        const rocket = await fetchRocket(rocketId);
        dispatch(AddRocket(rocket));
      }
    } catch (err: any) {
    } finally {
      dispatch(SetRocketLoading(false));
    }
  };

  const colDefs: IColHeader[] = [
    {
      field: "name",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    { field: "date", sortable: true },
    { field: "launchpad" },
    { field: "upcoming" },
    { field: "capsule" },
    { field: "details", cellRendererFramework: detailsRender },
  ];

  return (
    <Container maxWidth="lg" data-testid="launch-table-container">
      <Wrapper>
        <h1>SpaceX App</h1>
        {loading ? (
          <>Loading...</>
        ) : (
          <AgTable rowData={launches} colDefs={colDefs} />
        )}
        {openModal && (
          <RocketDetailsModal
            isOpen={openModal}
            rocket={getActiveRocket()}
            loading={rocketLoading}
            onClose={handleCloseModal}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
