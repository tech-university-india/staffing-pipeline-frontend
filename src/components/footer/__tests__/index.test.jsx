import React from 'react';
import Footer from '../index';
import { render } from '@testing-library/react';

describe('footer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
