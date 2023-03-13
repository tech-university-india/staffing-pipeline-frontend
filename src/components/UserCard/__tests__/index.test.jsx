import React from 'react';
import { render } from '@testing-library/react';
import UserCard from '..';

describe('UserCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<UserCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
