import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render correctly with a navbar when Navbar boolean is true', () => {
    const { asFragment } = render(<Header {...{ hasNav: true }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly without a navbar when Navbar boolean is false', () => {
    const { asFragment } = render(<Header {...{ hasNav: false }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
