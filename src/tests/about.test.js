import React from "react";
import { render } from "@testing-library/react";
import About from "../components/about/index";

describe("<About />", () => {
  it("Renders without crashing", () => {
    window.scrollTo = jest.fn();
  });

  it("Render check", async () => {
    const { findByText } = render(<About />);
    const status = (await findByText("회사소개")) !== "";
    expect(status).toBe(true);
  });
});
