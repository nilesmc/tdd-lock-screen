import React from 'react';
import { mount, shallow } from 'enzyme';
import LockScreen from '../LockScreen';
import ClockDisplay from "./ClockDisplay";

it('renders only Lockscreen without crashing', () => {
  shallow(<LockScreen />);
});

describe("LockScreen", () => {
  let props;
  let mountedLockScreen;
  const lockScreen = () => {
    if (!mountedLockScreen) {
      mountedLockScreen = mount(
        <LockScreen {...props} />
      );
    }
    return mountedLockScreen;
  }

  beforeEach(() => {
    props = {
    };
    mountedLockScreen = undefined;
  });

  it("always renders a div", () => {
    const divs = lockScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = lockScreen().find("div");

      const wrappingDiv = divs.first();

      expect(wrappingDiv.children()).toEqual(lockScreen().children());
    });
  });

  it("always renders a `ClockDisplay`", () => {
    expect(lockScreen().find(ClockDisplay).length).toBe(1);
  });

  describe("rendered `ClockDisplay`", () => {
    it("does not receive any props", () => {
      const clockDisplay = lockScreen().find(ClockDisplay);
      expect(Object.keys(clockDisplay.props()).length).toBe(0);
    });
  });

});