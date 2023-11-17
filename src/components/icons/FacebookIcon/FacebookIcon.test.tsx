import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import FacebookIcon from ".";

describe("FacebookIcon", () => {
  test("should render facebook icon", () => {
    render(<FacebookIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
