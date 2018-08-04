import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ThemeProvider } from "emotion-theming";
import { circuit } from "circuit-ui/lib/es/themes";
import App, { Test } from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should find selectors", () => {
  const onClick = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={circuit}>
      <Test onClick={onClick} />
    </ThemeProvider>
  );

  wrapper.find('Button[data-selector="button"]').simulate("click");
  expect(onClick).toHaveBeenCalledTimes(1);
});
