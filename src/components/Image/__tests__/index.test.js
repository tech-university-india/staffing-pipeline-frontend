import React from 'react';
import { render } from '@testing-library/react';
import Image from '..';

describe('Image Component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Image />);
    expect(asFragment()).toMatchSnapshot();
  });
});
