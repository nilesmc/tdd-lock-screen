import React from 'react';
import { mount, shallow } from 'enzyme';
import ClockDisplay from "./ClockDisplay";

it('renders only ClockDisplay without crashing', () => {
  shallow(<LockScreen />);
});
