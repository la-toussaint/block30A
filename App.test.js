import React from "react";
import { fireEvent, render } from "@testing-library/React";
import App from "./App";

describe("Testing on/off", () => {
  test("Toggle switches between on and off", () => {
    const { queryByLabelText, getByLabelText } = render(
      <App labelOn="On" labelOff="Off" />
    );
    expect(queryByLabelText(/Off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/Off/i));

    expect(queryByLabelText(/On/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/On/i));

    expect(queryByLabelText(/Off/i)).toBeTruthy();
  });
});
