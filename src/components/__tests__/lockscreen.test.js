import React from 'react';
import { mount, shallow } from 'enzyme';
import LockScreen from '../LockScreen';


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

});