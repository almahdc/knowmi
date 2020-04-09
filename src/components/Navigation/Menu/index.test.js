import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Menu from "./index";
import {Button} from "@material-ui/core";

configure({adapter: new Adapter()});

describe("<Menu/>", () => {
  it("should have 2 elements", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
