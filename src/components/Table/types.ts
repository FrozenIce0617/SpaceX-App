import { ILaunch } from "spacex/types";

export interface IAgGripProps {
  rowData: ILaunch[];
  colDefs: Array<IColHeader>;
}

export interface IColHeader {
  field: string;
  editable?: boolean;
  sortable?: boolean;
  filter?: boolean | string;
  floatingFilter?: boolean;
  cellRendererFramework?: (param: any) => JSX.Element;
}
