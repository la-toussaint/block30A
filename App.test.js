import React from "react";
import { fireEvent, render } from "@testing-library/React";
import App from "./App";
import reducers from "../redux/index";

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

describe("Testing reducers, specifically profile")
test("reducers", () => {
  let state;
  state = reducers(
    { auth: { token: null, isLoggedIn: false, profile: null } },
    {
      type: "auth/setToken",
      payload:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUwMjk0Y2Q3YTIxNjAwMTQzNTQ1ZTUiLCJ1c2VybmFtZSI6ImxvbG9tYXkiLCJpYXQiOjE2OTI2MzIzNjF9.ulQzKlGp-EJm-csbOilTN-r6KUhBo_7bsLiOui89SXI",
    }
  );
  expect(state).toEqual({
    auth: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUwMjk0Y2Q3YTIxNjAwMTQzNTQ1ZTUiLCJ1c2VybmFtZSI6ImxvbG9tYXkiLCJpYXQiOjE2OTI2MzIzNjF9.ulQzKlGp-EJm-csbOilTN-r6KUhBo_7bsLiOui89SXI",
      isLoggedIn: true,
      profile: !null,
    },
  });
});