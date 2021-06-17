import React from "react";
import { render } from "@testing-library/react";
import Service from "../components/service/index";
import mediaQuery from "css-mediaquery";

// Resize Window
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("<Service />", () => {
  it("Renders without crashing", () => {
    window.scrollTo = jest.fn();
  });

  it("Render check", async () => {
    const hwnd = render(<Service />);

    const pcStatus = await hwnd.findByText("게임 서비스");

    // Resize Mobile Viewport
    createMatchMedia(400);

    const mobileStatus = await hwnd.findByText("게임 서비스");

    expect(pcStatus === mobileStatus).toBe(true);
  });
});
