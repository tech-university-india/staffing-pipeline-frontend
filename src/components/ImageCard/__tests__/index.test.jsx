import React from 'react';
import { render } from '@testing-library/react';
import ImageCard from '..';

describe('ImageCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ImageCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
