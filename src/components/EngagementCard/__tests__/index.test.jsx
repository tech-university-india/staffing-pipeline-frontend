import React from 'react';
import { render } from '@testing-library/react';
import EngagementCard from '..';

describe('EngagementCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<EngagementCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
