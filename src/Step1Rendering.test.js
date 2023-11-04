import React from "react";
import { render } from "@testing-library/react";
import Step1 from "./Step1";

test("Step1 component renders without errors", () => {
  render(<Step1 props={{ personDetails: {} }} />);
});
