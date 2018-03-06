import React from 'react';
import { mount } from 'enzyme';
import LockScreen from '../LockScreen';

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

});