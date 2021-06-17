import React from "react";
import { render } from "@testing-library/react";
import Project from "../components/project/index";
import mediaQuery from "css-mediaquery";

// Resize Window
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("<Project />", () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });

  it("Renders without crashing", () => {
    window.scrollTo = jest.fn();
  });

  it("Render check", async () => {
    const hwnd = render(<Project />);

    const pcStatus = await hwnd.findByText("프로젝트");

    // Resize Mobile Viewport
    createMatchMedia(400);

    const mobileStatus = await hwnd.findByText("프로젝트");

    expect(pcStatus === mobileStatus).toBe(true);
  });
});
