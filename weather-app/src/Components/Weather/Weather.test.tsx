import { fireEvent, render, screen } from "@testing-library/react";
import Weather from "./Weather";


describe("search Component", () => {
  it("rendered search component", () => {
    const { getByTestId } = render(
        <Weather />
    );
    const input = getByTestId("search");
    expect(input).toBeTruthy();
  });
 
  it("rendered search button", () => {
    const { queryAllByTestId } = render(
        <Weather />
    );
    const input = queryAllByTestId("search-button");
    expect(input).toBeTruthy();
  });

  it("renders search button correctly and test click event", async () => {
    const mockCallBack = jest.fn();
    const button = render(
      <button
        onClick={mockCallBack}
      />,
    );
    const input = screen.getByRole('button');
    expect(input).toBeTruthy();
    fireEvent.click(await button.findByRole('button'));
    expect(mockCallBack).toHaveBeenCalled();
  });
  it("rendered text field for search city", () => {
    render(
      <Weather
      />,
    );
    const input = screen.getByTestId("search-input");
    expect(input).toBeTruthy();
  });
  it("rendered current weather data container", () => {
    render(
      < Weather
      />,
    );
    const input = screen.queryAllByTestId("current-data");
    expect(input).toBeTruthy();
  });
  it("rendered five days weather data container", () => {
    render(
      <Weather
      />,
    );
    const input = screen.queryAllByTestId("five-data");
    expect(input).toBeTruthy();
  });
});
