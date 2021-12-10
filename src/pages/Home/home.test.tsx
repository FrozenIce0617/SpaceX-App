import { render, screen, waitFor, fireEvent } from "utils/test-util";
import Home from '.';

describe("Home page test", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("launch table wrapper should be rendered", () => {
    const launchTable = screen.getByTestId("launch-table-container");
    expect(launchTable).toBeInTheDocument();
  });

  it("display spinner for loading status", async () => {
    const spinner = screen.queryByTestId("loading-spinner");
    await waitFor(() => spinner);
    expect(spinner).toBeInTheDocument();
  });

  it("show ag-grid table", async () => {
    await waitFor(() => screen.getByTestId("ag-grid-table"), {
      timeout: 3000,
    });
    expect(screen.getByTestId("ag-grid-table")).toBeInTheDocument();
  });

  it("table rows count should be greater than 1", async () => {
    await waitFor(() => screen.getAllByRole("row"), {
      timeout: 3000,
    });

    const rows = await screen.getAllByRole("row");
    expect(rows.length).toBeGreaterThan(1);
  });

  it("display the rocket detail modal", async () => {
    await waitFor(() => screen.getByTestId("details-button-0"), {
      timeout: 3000,
    });
    const button = screen.getByTestId("details-button-0");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => screen.getByTestId("rocket-details-modal"), { timeout: 3000 });
    const modal = screen.getByTestId("rocket-details-modal");
    expect(modal).toBeInTheDocument();
  });
});
