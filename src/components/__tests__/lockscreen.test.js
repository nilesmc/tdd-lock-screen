import React from 'react';
import { mount, shallow } from 'enzyme';
import LockScreen from '../LockScreen';
import ClockDisplay from '../ClockDisplay';

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
      userInfoMessage: undefined
    };
    mountedLockScreen = undefined;
  });

  it("always renders a div", () => {
    const divs = lockScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    fit("contains everything else that gets rendered", () => {
      
      debugger

      const divs = lockScreen().find("div");
      console.log(divs);
      const wrappingDiv = divs.first();
      console.log(wrappingDiv.children());
      debug;

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