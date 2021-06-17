import React from "react";
import { render } from "@testing-library/react";
import Solution from "../components/solution/index";
import mediaQuery from "css-mediaquery";

// Resize Window
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("<Solution />", () => {
  it("Renders without crashing", () => {
    window.scrollTo = jest.fn();
  });

  it("Render check", async () => {
    const hwnd = render(<Solution />);

    const pcStatus = await hwnd.findByText("기술과 솔루션");

    // Resize Mobile Viewport
    createMatchMedia(400);

    const mobileStatus = await hwnd.findByText("기술과 솔루션");

    expect(pcStatus === mobileStatus).toBe(true);
  });
});
