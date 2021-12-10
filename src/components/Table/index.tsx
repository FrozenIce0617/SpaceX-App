import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { IAgGripProps } from "./types";

const AgTable = ({ rowData, colDefs }: IAgGripProps) => {
  const [data] = useState(rowData);
  const fields = useMemo(() => colDefs, [colDefs]);
  return (
    <div
      className="ag-theme-alpine"
      data-testid="ag-grid-table"
      aria-label="launch table"
      style={{ height: 800, width: "100%" }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={fields}
        rowSelection="single"
      ></AgGridReact>
    </div>
  );
};

export default AgTable;
