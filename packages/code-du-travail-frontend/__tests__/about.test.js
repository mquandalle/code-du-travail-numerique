import React from "react";
import { render } from "@testing-library/react";
import About from "../pages/about";

describe("<About />", () => {
  it("should render", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});