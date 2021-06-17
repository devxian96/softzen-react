import React from "react";
import { render } from "@testing-library/react";
import HeaderComponent from "../components/common/HeaderComponent";
import mediaQuery from "css-mediaquery";

// Resize Window
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("<HeaderComponent />", () => {
  it("Renders without crashing", () => {
    window.scrollTo = jest.fn();
  });

  it("Render check", async () => {
    const hwnd = render(<HeaderComponent />);

    const pcStatus = await hwnd.findByText("ZEN");

    // Resize Mobile Viewport
    createMatchMedia(400);

    const mobileStatus = await hwnd.findByText("ZEN");

    expect(pcStatus === mobileStatus).toBe(true);
  });
});
